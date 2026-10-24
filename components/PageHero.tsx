"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { VARIANTS } from "@/lib/data";
import { useIntroDone } from "@/lib/intro";
import { Sparkles, Waves } from "./BgFx";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  crumbs: Crumb[];
};

export function PageHero({ title, subtitle, image, crumbs }: PageHeroProps) {
  const done = useIntroDone();
  return (
    <section className="relative flex min-h-[65vh] sm:min-h-[72vh] lg:min-h-[80vh] items-end overflow-hidden bg-forest pb-20 pt-36 text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      >
        <Image src={image} alt="" fill unoptimized priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/35" />

      {/* Background Bubble Animation */}
      <Sparkles />

      {/* Bottom Wave Animation */}
      <Waves className="text-cream" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 20 }}
          animate={done ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.3 }}
          className="mb-4 flex flex-wrap items-center justify-center gap-2 text-sm text-white/75 sm:justify-start"
        >
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <span className="text-gold">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-gold transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={done ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight text-balance sm:text-5xl sm:mx-0 lg:text-6xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
