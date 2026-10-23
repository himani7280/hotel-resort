"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/data";

export const Stars = ({ count }: { count: number }) => (
  <span className="text-gold" aria-label={`${count} out of 5 stars`}>
    {"★".repeat(count)}
    <span className="text-gold/30">{"★".repeat(5 - count)}</span>
  </span>
);

export const Avatar = ({ name }: { name: string }) => (
  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-linear-to-br from-gold to-teal font-serif text-lg font-semibold text-white">
    {name
      .split(/[\s&]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")}
  </span>
);

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % items.length), 6500);
    return () => clearInterval(timer);
  }, [items.length]);

  const item = items[index];
  if (!item) return null;

  const step = (delta: number) => setIndex((current) => (current + delta + items.length) % items.length);
  const arrow =
    "glass hidden h-12 w-12 shrink-0 place-items-center rounded-full text-white transition hover:bg-gold hover:text-forest sm:grid";

  return (
    <div className="mx-auto flex max-w-5xl items-center gap-5 text-center">
      <button type="button" onClick={() => step(-1)} aria-label="Previous testimonial" className={arrow}>
        ←
      </button>
      <div className="relative min-h-75 flex-1">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.96 }}
            transition={{ duration: 0.55 }}
            className="glass rounded-4xl p-8 sm:p-14"
          >
            <span className="text-gold-gradient font-serif text-8xl leading-none">“</span>
            <blockquote className="font-serif text-2xl font-medium leading-relaxed text-white sm:text-3xl">{item.quote}</blockquote>
            <figcaption className="mt-7 flex flex-col items-center gap-3">
              <Avatar name={item.name} />
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/60">
                  {item.from} · {item.stay}
                </p>
              </div>
              <Stars count={item.rating} />
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((entry, i) => (
            <button
              key={entry.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
      <button type="button" onClick={() => step(1)} aria-label="Next testimonial" className={arrow}>
        →
      </button>
    </div>
  );
}
