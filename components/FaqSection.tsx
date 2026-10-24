"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "@/components/BgFx";
import { faqVariant } from "@/lib/data";

type FaqItem = {
  question: string;
  answer: string;
  category?: string;
};

type FaqSectionProps = {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  items?: FaqItem[];
  variantKey?: string;
};

const CATEGORIES = [
  "Check-In & Stay",
  "Private Transfers",
  "Organic Gastronomy",
  "Flexibility Policy",
  "Holistic Wellness",
  "Family Sanctuaries",
];

export function FaqSection({ eyebrow, heading, subtitle, items, variantKey }: FaqSectionProps) {
  // Fall back to variant data from sections.Faq.variants.HotelResortFaq1
  const d = faqVariant;
  const _eyebrow = eyebrow ?? d.eyebrow;
  const _heading = heading ?? d.heading;
  const _subtitle = subtitle ?? d.subtitle;
  const _items: FaqItem[] = (items ?? d.items) as FaqItem[];

  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative isolate mx-auto max-w-7xl px-4 py-4 my-3 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#071f16] px-5 py-10 text-white shadow-2xl sm:px-10 sm:py-14 border-2 border-gold/30">
        {/* Background ambient lighting in 2 theme colors: Forest + Gold */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/15 blur-[100px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-teal/20 blur-[100px]" />
        <Sparkles />

      <div className="relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold shadow-sm">
          ✦ {_eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-2xl font-medium leading-[1.2] text-white sm:text-3xl lg:text-[2.25rem]">
          {_heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
          {_subtitle}
        </p>
      </div>

      <div className="relative mt-10 space-y-4">
        {_items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const num = String(idx + 1).padStart(2, "0");
          const category = CATEGORIES[idx % CATEGORIES.length];

          return (
            <motion.div
              key={item.question}
              initial={false}
              animate={{
                scale: isOpen ? 1 : 0.995,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`group overflow-hidden rounded-2xl border transition-all duration-500 ${
                isOpen
                  ? "border-gold bg-gradient-to-br from-[#0c2e22] via-[#09251b] to-[#071d15] shadow-[0_12px_36px_rgba(197,155,75,0.22)] ring-1 ring-gold/40"
                  : "border-white/12 bg-white/[0.04] hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/[0.07] hover:shadow-[0_10px_28px_rgba(197,155,75,0.12)]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                  {/* Two-color number badge */}
                  <span
                    className={`font-serif text-sm sm:text-base font-bold shrink-0 transition-colors duration-300 ${
                      isOpen ? "text-gold" : "text-gold/50 group-hover:text-gold"
                    }`}
                  >
                    {num}
                  </span>

                  <div>
                    <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold/75 mb-1">
                      {category}
                    </span>
                    <h3
                      className={`font-serif text-base sm:text-lg font-medium transition-colors duration-300 leading-snug ${
                        isOpen ? "text-gold" : "text-white/95 group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>
                </div>

                {/* Animated Gold Toggle Circle Button */}
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    scale: isOpen ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-base font-semibold shadow-md transition-all duration-300 ${
                    isOpen
                      ? "border border-gold bg-gold text-forest shadow-[0_0_16px_rgba(197,155,75,0.6)] ring-4 ring-gold/20"
                      : "border border-gold/30 bg-gold/10 text-gold group-hover:border-gold group-hover:bg-gold/20"
                  }`}
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.28, delay: 0.08 },
                    }}
                  >
                    <div className="border-t border-gold/20 px-5 sm:px-6 pb-6 pt-4.5 bg-black/15">
                      <div className="flex items-stretch gap-3.5">
                        {/* Vertical Gold Gradient Line Accent */}
                        <motion.span
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="w-1 origin-top rounded-full bg-gradient-to-b from-gold via-gold/70 to-transparent shrink-0"
                          aria-hidden="true"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm sm:text-base leading-relaxed text-white/85">
                            {item.answer}
                          </p>
                          <div className="mt-3.5 flex items-center gap-2 text-[0.68rem] text-gold/75 font-medium tracking-wide">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                            <span>Curated by Suryavana Guest Concierge</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
