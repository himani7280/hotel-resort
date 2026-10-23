"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/data";
import { Photo } from "./Photo";

type GalleryExplorerProps = { items: GalleryItem[]; categories: string[] };

/** Repeating span pattern gives the grid a masonry rhythm while rows stay aligned. */
const SPANS = ["row-span-2", "", "", "col-span-2", "row-span-2", "", "", "", "row-span-2", "col-span-2", "", ""];

export function GalleryExplorer({ items, categories }: GalleryExplorerProps) {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const visible = active === "All" ? items : items.filter((item) => item.category === active);

  const step = useCallback(
    (delta: number) => setOpen((current) => (current === null ? null : (current + delta + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const current = open === null ? undefined : visible[open];

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Gallery categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className="relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            {active === category && <motion.span layoutId="gallery-pill" className="absolute inset-0 rounded-full bg-forest" />}
            <span className={`relative ${active === category ? "text-white" : "text-forest"}`}>{category}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid auto-rows-[180px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.4) }}
              onClick={() => setOpen(i)}
              aria-label={`Open ${item.title}`}
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl text-left ${SPANS[i % SPANS.length]}`}
            >
              <Photo src={item.src} alt={item.title} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />
              <span className="absolute inset-0 bg-gradient-to-t from-forest/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">{item.category}</span>
                <span className="mt-1 block font-serif text-lg leading-tight">{item.title}</span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-forest/95 p-4 backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <motion.figure
              key={current.src}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="relative h-[68vh] w-full">
                <Image src={current.src} alt={current.title} fill unoptimized sizes="100vw" className="rounded-t-[3rem] object-cover sm:rounded-t-[6rem]" />
              </div>
              <figcaption className="mt-4 text-center text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{current.category}</p>
                <p className="mt-1 font-serif text-xl">{current.title}</p>
              </figcaption>
            </motion.figure>

            <button type="button" onClick={() => setOpen(null)} aria-label="Close viewer" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-2xl text-white hover:bg-gold hover:text-forest">
              ×
            </button>
            {(["prev", "next"] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                aria-label={dir === "prev" ? "Previous photo" : "Next photo"}
                onClick={(event) => {
                  event.stopPropagation();
                  step(dir === "prev" ? -1 : 1);
                }}
                className={`absolute top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-xl text-white hover:bg-gold hover:text-forest ${dir === "prev" ? "left-3" : "right-3"}`}
              >
                {dir === "prev" ? "←" : "→"}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
