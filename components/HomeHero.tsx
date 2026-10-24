"use client";

import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { VARIANTS } from "@/lib/data";
import { useIntroDone } from "@/lib/intro";
import { Sparkles, Waves } from "./BgFx";
import { Magnetic } from "./Fx";
import { sharedContent as shared } from "@/lib/data";

type HomeHeroProps = {
  images: string[];
  phrases: string[];
};

const EASE = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 6000;

export function HomeHero({ images, phrases }: HomeHeroProps) {
  const [index, setIndex] = useState(0);
  const done = useIntroDone();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % images.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, [images.length, index]);

  const sequence = phrases.flatMap((phrase) => [phrase, 2200]);
  const show = (variants: Variants, delay: number) => ({
    variants,
    initial: "hidden",
    animate: done ? "show" : undefined,
    transition: { delay, duration: 0.9, ease: EASE },
  });

  return (
    <section ref={ref} className="relative flex min-h-svh items-center justify-center overflow-hidden bg-forest text-center text-white">
      <AnimatePresence>
        <motion.div
          key={images[index]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.18 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 9, ease: "linear" } }}
        >
          <Image src={images[index] ?? ""} alt="" fill unoptimized priority sizes="100vw" className="object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-forest/75 via-forest/30 to-forest/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,color-mix(in_srgb,var(--color-forest)_55%,transparent)_100%)]" />

      {/* Bubble Animation */}
      <Sparkles />

      {/* Bottom Wave Animation */}
      <Waves className="text-cream" />

      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 mx-auto max-w-5xl px-4 pb-20 pt-32 sm:px-6">
        {/* 2-line title: Line 1 white text, Line 2 animated text strictly in 1 line */}
        <motion.h1
          {...show(VARIANTS.hero.title, 0.5)}
          className="mx-auto font-serif text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-xl"
        >
          <span className="block text-white drop-shadow text-nowrap whitespace-nowrap">{shared.hero.titleLine1}</span>
          <span className="block text-gold-gradient italic mt-2 min-h-[1.25em] drop-shadow text-nowrap whitespace-nowrap overflow-hidden">
            {done && <TypeAnimation sequence={sequence} wrapper="span" speed={45} deletionSpeed={65} repeat={Infinity} />}
          </span>
        </motion.h1>

        {/* Direct CTA button right below heading */}
        <motion.div {...show(VARIANTS.hero.subtitle, 0.7)} className="mt-8 flex items-center justify-center">
          <Magnetic>
            <Link href={shared.hero.cta.href} className="btn-primary btn-gold px-9 py-3.5 text-xs font-semibold tracking-[0.2em] shadow-xl">
              {shared.hero.cta.label}
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Hero slides">
        {images.map((image, i) => (
          <button
            key={image}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-3 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
