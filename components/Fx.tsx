"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Photo } from "./Photo";

const EASE = [0.22, 1, 0.36, 1] as const;
/** Slight over-scale keeps the frame filled while the photo drifts. */
const SETTLED_SCALE = 1.14;

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  /** Pixels the photo drifts inside its frame while scrolling. 0 disables parallax. */
  drift?: number;
  delay?: number;
};

/**
 * Photo that is wiped in from the bottom on first view, settles from a zoomed-in
 * state, then drifts slowly inside its frame as the page scrolls.
 * The parent supplies size and shape (rounded corners etc.) through `className`.
 */
export function ImageReveal({ src, alt, className = "", sizes, drift = 25, delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-drift, drift]);

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, ease: EASE, delay }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: drift ? y : 0 }}
      >
        <Photo src={src} alt={alt} sizes={sizes} />
      </motion.div>
    </motion.div>
  );
}

/** Pulls its child toward the cursor with a spring, snapping back on leave. */
export function Magnetic({ children, strength = 0.3, className }: { children: ReactNode; strength?: number; className?: string }) {
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });

  return (
    <motion.div
      className={`inline-block ${className ?? ""}`}
      style={{ x, y }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const box = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - (box.left + box.width / 2)) * strength);
        y.set((event.clientY - (box.top + box.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

/** Statement whose words light up one by one as the section scrolls through the viewport. */
export function TextFill({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} word={word} range={[i / words.length, (i + 1) / words.length]} progress={scrollYProgress} />
      ))}
    </p>
  );
}

/** Three identical strips sit side by side, so one strip is a third of the track: wrap into [-33.33, 0). */
const PERIOD = 100 / 3;
const wrap = (value: number) => (((value % PERIOD) + PERIOD) % PERIOD) - PERIOD;

/** Giant looping text that speeds up (and reverses) with scroll velocity. */
export function VelocityMarquee({ items, className = "" }: { items: string[]; className?: string }) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const boost = useTransform(smooth, [-1000, 0, 1000], [-4, 0, 4], { clamp: false });
  const direction = useRef(1);
  const x = useTransform(base, (value) => `${wrap(value)}%`);

  useAnimationFrame((_, delta) => {
    const factor = boost.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    base.set(base.get() + direction.current * (0.35 + Math.abs(factor)) * (delta / 1000) * 3);
  });

  const strip = (
    <span className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-10">
          {item}
          <span className="text-gold" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <motion.div style={{ x }} className="flex w-max">
        {strip}
        {strip}
        {strip}
      </motion.div>
    </div>
  );
}
