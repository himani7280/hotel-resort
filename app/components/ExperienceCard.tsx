"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { Experience } from "@/lib/data";
import { Photo } from "./Photo";

/** Image card whose details slide up on hover, keyboard focus, or tap. */
export function ExperienceCard({ item }: { item: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="group relative h-[440px] overflow-hidden rounded-[1.75rem] bg-forest shadow-lg shadow-forest/10"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <Photo src={item.image} alt={item.title} sizes="(min-width: 1024px) 33vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <h3 className="font-serif text-4xl font-medium leading-none">{item.title}</h3>
        <p className="mt-3 text-sm text-white/80">{item.text}</p>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="mt-4 border-t border-white/20 pt-4 text-sm leading-relaxed text-white/90">{item.back}</p>
          <Link href={item.href} className="btn-primary btn-gold mt-5 text-[0.72rem]!">
            {item.title === "Beach Adventures"
              ? "Explore Beaches"
              : item.title === "Pools & Cabanas"
              ? "View Waters Gallery"
              : "Discover Dining"}
          </Link>
        </motion.div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className={`absolute right-6 top-[-3.5rem] grid h-11 w-11 place-items-center rounded-full bg-gold text-forest transition-transform duration-500 md:hidden ${open ? "rotate-45" : ""}`}
        >
          <span className="sr-only">{open ? "Hide details" : "Show details"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
    </article>
  );
}
