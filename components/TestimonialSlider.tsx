"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/data";

export const Stars = ({ count }: { count: number }) => (
  <span className="whitespace-nowrap text-gold text-xs" aria-label={`${count} out of 5 stars`}>
    {"★".repeat(count)}
    <span className="text-gold/30">{"★".repeat(5 - count)}</span>
  </span>
);

export const Avatar = ({ name, avatar }: { name: string; avatar?: string }) => {
  const [error, setError] = useState(false);

  if (avatar && !error) {
    return (
      <img
        src={avatar}
        alt={name}
        onError={() => setError(true)}
        className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-gold/40 shadow-sm"
        loading="lazy"
      />
    );
  }

  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linear-to-br from-gold to-teal font-serif text-xs font-semibold text-white ring-2 ring-gold/30">
      {name
        .split(/[\s&]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")}
    </span>
  );
};

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="relative mx-2.5 flex h-[160px] w-[320px] shrink-0 flex-col justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/8 hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]">
      <span className="pointer-events-none absolute right-3.5 top-1.5 font-serif text-4xl leading-none text-gold/20 select-none">&ldquo;</span>
      
      <div className="space-y-1.5 pr-5">
        <Stars count={item.rating} />
        <blockquote className="font-serif text-[0.82rem] leading-snug text-white/90 line-clamp-3">
          {item.quote}
        </blockquote>
      </div>

      <figcaption className="flex items-center gap-2.5 border-t border-white/10 pt-2.5">
        <Avatar name={item.name} avatar={item.avatar} />
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white">{item.name}</p>
          <p className="truncate text-[0.68rem] text-white/55">
            {item.from} &middot; {item.stay}
          </p>
        </div>
      </figcaption>
    </div>
  );
}

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  const track1 = [...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2];

  return (
    <div className="w-full overflow-hidden space-y-3">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  28s linear infinite; }
        .marquee-right { animation: marquee-right 28s linear infinite; }
        .marquee-wrap:hover .marquee-left,
        .marquee-wrap:hover .marquee-right { animation-play-state: paused; }
      `}</style>

      <div className="marquee-wrap overflow-hidden py-1">
        <div className="marquee-left flex w-max">
          {track1.map((item, i) => (
            <TestimonialCard key={`r1-${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>

      <div className="marquee-wrap overflow-hidden py-1">
        <div className="marquee-right flex w-max">
          {track2.map((item, i) => (
            <TestimonialCard key={`r2-${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
