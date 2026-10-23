"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Photo } from "./Photo";

type RoomGalleryProps = { images: string[]; name: string };

export function RoomGallery({ images, name }: RoomGalleryProps) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((current) => (current === null ? null : (current + 1) % images.length));
      if (event.key === "ArrowLeft") setOpen((current) => (current === null ? null : (current - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  const current = open === null ? undefined : images[open];

  return (
    <>
      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        {images.map((image, i) => (
          <motion.button
            key={image}
            type="button"
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            aria-label={`Open photo ${i + 1} of ${name}`}
            className={`group relative h-60 cursor-zoom-in overflow-hidden rounded-2xl ${
              i === 0 ? "md:col-span-2 md:row-span-2 md:h-full" : ""
            }`}
          >
            <Photo src={image} alt={`${name} photo ${i + 1}`} sizes="(min-width: 768px) 50vw, 100vw" />
            <span className="absolute inset-0 bg-forest/0 transition group-hover:bg-forest/25" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${name} gallery`}
          >
            <motion.div
              key={current}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative h-[80vh] w-full max-w-5xl"
            >
              <Image src={current} alt={name} fill unoptimized sizes="100vw" className="rounded-2xl object-contain" />
            </motion.div>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close gallery"
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-2xl text-white hover:bg-gold hover:text-forest"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
