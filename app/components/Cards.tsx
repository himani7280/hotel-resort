"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Post, Room } from "@/lib/data";
import { Photo } from "./Photo";
import { Spotlight } from "./Spotlight";

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
const HOVER = { type: "spring", stiffness: 140, damping: 18 } as const;

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function RoomCard({ room }: { room: Room }) {
  return (
    <motion.article whileHover={{ y: -8 }} transition={HOVER} className="h-full">
      <Spotlight className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-forest/5 ring-1 ring-forest/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-forest/15">
        <Link href={`/rooms/${room.slug}`} className="relative block h-72 overflow-hidden" aria-label={`${room.name} details`}>
          <Photo src={room.image} alt={room.name} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
          <span className="glass absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
            {room.category}
          </span>
          <p className="absolute bottom-4 left-5 text-white">
            <span className="font-serif text-3xl font-semibold">{formatPrice(room.price)}</span>
            <span className="ml-1 text-xs tracking-wider text-white/80">/ night</span>
          </p>
        </Link>
        <div className="flex flex-1 flex-col justify-between p-7">
          <div>
            <h3 className="font-serif text-3xl font-semibold leading-tight text-forest">{room.name}</h3>
            <p className="mt-2 text-sm text-mist">{room.tagline}</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-ink/75">
              {[`${room.size} m²`, `Up to ${room.guests} guests`, room.bed].map((fact) => (
                <li key={fact} className="rounded-full bg-sand px-3 py-1">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={`/rooms/${room.slug}`}
            className="mt-6 inline-flex items-center gap-2 border-t border-forest/10 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal transition-all group-hover:gap-4"
          >
            View sanctuary details <Arrow />
          </Link>
        </div>
      </Spotlight>
    </motion.article>
  );
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <motion.article whileHover={{ y: -8 }} transition={HOVER} className="h-full">
      <Spotlight className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-forest/5 ring-1 ring-forest/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-forest/15">
        <Link href={`/blog/${post.slug}`} className="relative block h-60 overflow-hidden" aria-label={post.title}>
          <Photo src={post.image} alt="" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest">
            {post.category}
          </span>
        </Link>
        <div className="flex flex-1 flex-col justify-between p-7">
          <div>
            <p className="text-xs uppercase tracking-wider text-mist">
              {post.date}
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-forest transition-colors group-hover:text-teal">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mist line-clamp-3 text-justify [text-align:justify] [text-justify:inter-word]">{post.excerpt}</p>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-6 inline-flex items-center gap-2 border-t border-forest/10 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal transition-all group-hover:gap-4"
          >
            Read story <Arrow />
          </Link>
        </div>
      </Spotlight>
    </motion.article>
  );
}
