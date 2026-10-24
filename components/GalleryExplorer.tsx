"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { VARIANTS, type GalleryItem } from "@/lib/data";
import { Photo } from "./Photo";

type GalleryExplorerProps = { items: GalleryItem[]; categories: string[] };

/** Repeating span pattern gives the grid a masonry rhythm while rows stay aligned. */
const SPANS = ["row-span-2", "", "", "col-span-2", "row-span-2", "", "", "", "row-span-2", "col-span-2", "", ""];

function getSpan(index: number, total: number) {
  // "All" view: last image swaps its tall shape (1×2) for a wide one (2×1) so it fills the empty slot beside it
  if (total === 25 && index === 24) return "col-span-2";
  return SPANS[index % SPANS.length];
}

export function GalleryExplorer({ items, categories }: GalleryExplorerProps) {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const visible = active === "All" ? items : items.filter((item) => item.category === active);

  const step = useCallback(
    (delta: number) =>
      setOpen((current) =>
        current === null ? null : (current + delta + visible.length) % visible.length,
      ),
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
      {/* ── Category filter tabs ── */}
      <div
        className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
        role="tablist"
        aria-label="Gallery categories"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className="relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            {active === category && (
              <motion.span
                layoutId="gallery-pill"
                className="absolute inset-0 rounded-full bg-forest"
              />
            )}
            <span className={`relative ${active === category ? "text-white" : "text-forest"}`}>
              {category}
            </span>
          </button>
        ))}
      </div>

      {/* ── Masonry grid ── */}
      <motion.div
        layout
        className="grid auto-rows-[180px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
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
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl text-left ${getSpan(i, visible.length)}`}
            >
              <Photo
                src={item.src}
                alt={item.title}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-forest/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">
                  {item.category}
                </span>
                <span className="mt-1 block font-serif text-lg leading-tight">{item.title}</span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── Lightbox (portal: page-transition transforms would otherwise trap position:fixed) ── */}
      {mounted && createPortal(
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#000",
              margin: 0,
            }}
          >
            {/* Image + caption — stop click propagation */}
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: "90vw",
                padding: "0 clamp(0.5rem, 5vw, 4.5rem)",
              }}
            >
              {/* Image wrapper */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "78vh",
                }}
              >
                <Image
                  src={current.src}
                  alt={current.title}
                  fill
                  unoptimized
                  sizes="100vw"
                  style={{ objectFit: "contain", borderRadius: "1rem" }}
                  priority
                />
              </div>

              {/* Caption */}
              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#f59e0b",
                  }}
                >
                  {current.category}
                </p>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "1.15rem",
                    color: "#fff",
                    fontFamily: "inherit",
                  }}
                >
                  {current.title}
                </p>
                <p style={{ marginTop: "0.25rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>
                  {(open ?? 0) + 1} / {visible.length}
                </p>
              </div>
            </motion.div>

            {/* ✕ Close */}
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close viewer"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                zIndex: 100000,
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f59e0b"; (e.currentTarget as HTMLButtonElement).style.color = "#000"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            >
              ×
            </button>

            {/* ‹ Prev */}
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              style={{
                position: "absolute",
                left: "0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 100000,
                width: "3rem",
                height: "3rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1.75rem",
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f59e0b"; (e.currentTarget as HTMLButtonElement).style.color = "#000"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            >
              ‹
            </button>

            {/* › Next */}
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              style={{
                position: "absolute",
                right: "0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 100000,
                width: "3rem",
                height: "3rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "1.75rem",
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f59e0b"; (e.currentTarget as HTMLButtonElement).style.color = "#000"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
      )}
    </div>
  );
}
