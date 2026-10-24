"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import type { FormEvent, ReactNode } from "react";
import { miscContent as misc } from "@/lib/data";

const bar = misc.bookingBar;

const FIELD =
  "mt-1.5 w-full rounded-xl border border-forest/10 bg-white/70 px-4 py-3 text-sm normal-case tracking-normal text-ink outline-none transition focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/20";
const LABEL = "block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-mist";

const Icon = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className="mb-1 mr-1.5 inline h-3.5 w-3.5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export function BookingBar() {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === "string" && value) params.set(key, value);
    });
    router.push(`${bar.targetHref}?${params.toString()}`);
  };

  return (
    <div className="relative z-20 px-5">
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass-light mx-auto -mt-20 grid max-w-6xl gap-4 rounded-[2rem] p-6 shadow-2xl shadow-forest/20 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end lg:p-8"
      >
        <label className={LABEL}>
          <Icon>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </Icon>
          {bar.checkIn}
          <input type="date" name="checkin" className={FIELD} required />
        </label>
        <label className={LABEL}>
          <Icon>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </Icon>
          {bar.checkOut}
          <input type="date" name="checkout" className={FIELD} required />
        </label>
        <label className={LABEL}>
          <Icon>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
          </Icon>
          {bar.guests}
          <select name="guests" defaultValue={bar.defaultGuests} className={FIELD}>
            {bar.guestCounts.map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? bar.guestSingular : bar.guestPlural}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="btn-primary btn-gold py-4! sm:col-span-2 lg:col-span-1">
          {bar.submit}
        </button>
      </motion.form>
    </div>
  );
}
