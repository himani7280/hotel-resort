"use client";

import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";

import { MOTION } from "@/lib/data";

const { ease: EASE, duration: DURATION } = MOTION;

type RevealProps = {
  children: ReactNode;
  dir?: keyof typeof MOTION.reveal;
  delay?: number;
  className?: string;
};

export function Reveal({ children, dir = "up", delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={MOTION.reveal[dir]}
      initial="hidden"
      whileInView="show"
      style={{ transformPerspective: 1200 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: DURATION, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={MOTION.stagger.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={MOTION.stagger.item}
      transition={{ duration: DURATION, ease: EASE }}
      style={{ transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

type CounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
};

export function Counter({ value, suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) ref.current.textContent = latest.toFixed(decimals) + suffix;
      }),
    [spring, decimals, suffix],
  );

  return <span ref={ref}>{(0).toFixed(decimals) + suffix}</span>;
}

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${ratio})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold via-lagoon to-teal"
    />
  );
}

/** Words rise one by one from a mask. Supports multiline \n. */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const lines = text.split("\n");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={MOTION.word.container}
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className={lines.length > 1 ? "block" : "inline"}>
          {line.split(" ").map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block pr-[0.25em]"
                variants={{ hidden: { y: "110%", rotate: 6 }, show: { y: 0, rotate: 0, transition: { duration: 0.8, ease: EASE } } }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

/** Mouse-follow 3D tilt with a soft spring. */
export function Tilt({ children, className, max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const rx = useSpring(0, { stiffness: 110, damping: 20, mass: 0.9 });
  const ry = useSpring(0, { stiffness: 110, damping: 20, mass: 0.9 });

  return (
    <motion.div
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const box = event.currentTarget.getBoundingClientRect();
        ry.set(((event.clientX - box.left) / box.width - 0.5) * max * 2);
        rx.set(-((event.clientY - box.top) / box.height - 0.5) * max * 2);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Slides an oversized child against scroll for a parallax feel. */
export function Parallax({ children, className, offset = 80 }: { children: ReactNode; className?: string; offset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="absolute -inset-x-0 -inset-y-24">
        {children}
      </motion.div>
    </div>
  );
}

type FlipCardProps = { front: ReactNode; back: ReactNode; className?: string };

/** Click/tap or hover flips the card around its Y axis. */
export function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const face = "absolute inset-0 overflow-hidden rounded-3xl [backface-visibility:hidden]";

  return (
    <div
      className={`cursor-pointer [perspective:1400px] ${className}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((value) => !value)}
      onKeyDown={(event) => event.key === "Enter" && setFlipped((value) => !value)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 48, damping: 13, mass: 1.3 }}
      >
        <div className={face}>{front}</div>
        <div className={`${face} [transform:rotateY(180deg)]`}>{back}</div>
      </motion.div>
    </div>
  );
}

/** Endless photo strip; pass images once, it duplicates them. */
export function PhotoMarquee({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {[...images, ...images].map((src, i) => (
          <div key={`${src}-${i}`} className="group relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
}

const useIsPhone = () => {
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setPhone(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return phone;
};

type StackCardProps = { children: ReactNode; index: number; total: number; progress: MotionValue<number> };

function StackCard({ children, index, total, progress }: StackCardProps) {
  const phone = useIsPhone();
  const start = index / total;
  const scale = useTransform(progress, [start, Math.min(1, start + 1 / total)], [1, MOTION.stack.endScale]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / total)], [1, MOTION.stack.endOpacity]);

  return (
    <motion.div
      className="sticky sm:static sm:h-full"
      style={{ top: MOTION.stack.topOffset + index * MOTION.stack.step, scale: phone ? scale : 1, opacity: phone ? dim : 1, transformOrigin: "top center" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * On phones each child sticks under the navbar and the next one slides over it
 * (stacked-cards scroll). From `sm` up it is a plain layout driven by `className`.
 */
export function StackList({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: [`start ${MOTION.stack.topOffset}px`, "end end"] });
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={`flex flex-col gap-8 pb-4 sm:pb-0 ${className}`}>
      {items.map((child, index) => (
        <StackCard key={index} index={index} total={items.length} progress={scrollYProgress}>
          {child}
        </StackCard>
      ))}
    </div>
  );
}
