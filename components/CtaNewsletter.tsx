"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { VARIANTS, ctaVariant } from "@/lib/data";
import { ArrowRightIcon } from "@/lib/icons";

// Default data pulled from sections.Cta.variants.HotelResortCta1
const newsletter = ctaVariant;

type CtaNewsletterProps = {
  eyebrow?: string;
  headingBefore?: string;
  headingAccent?: string;
  headingAfter?: string;
  text?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export function CtaNewsletter(props: CtaNewsletterProps) {
  const eyebrow = props.eyebrow ?? newsletter.eyebrow;
  const headingBefore = props.headingBefore ?? newsletter.headingBefore;
  const headingAccent = props.headingAccent ?? newsletter.headingAccent;
  const headingAfter = props.headingAfter ?? newsletter.headingAfter;
  const text = props.text ?? newsletter.text;
  const cta = props.cta ?? newsletter.cta;

  return (
    <section className="relative isolate mx-auto max-w-7xl px-4 py-4 my-4 sm:px-6 lg:px-8">
      <motion.div
        variants={VARIANTS.reveal.up}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="rounded-3xl bg-gradient-to-r from-forest/95 via-[#0a2e21] to-forest/95 p-8 sm:p-12 border border-gold/25 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
            <h2 className="mt-2 font-serif text-2xl font-medium text-white sm:text-3xl lg:text-[2.25rem] leading-[1.25]">
              {headingBefore}
              <span className="text-gold-gradient italic inline-block pr-2.5 -mr-1.5 align-baseline">
                {headingAccent}
              </span>
              {headingAfter}
            </h2>
            <p className="mt-3 text-sm text-white/75 max-w-lg leading-relaxed">
              {text}
            </p>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <motion.div variants={VARIANTS.scale}>
              <Link
                href={cta?.href || "/contact"}
                className="btn-primary btn-gold inline-flex items-center gap-3 whitespace-nowrap px-8 py-4 text-xs font-semibold tracking-widest uppercase shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <span>{cta?.label || "Contact Us"}</span>
                <ArrowRightIcon size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


