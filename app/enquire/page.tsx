import type { Metadata } from "next";
import { Suspense } from "react";
import { BRAND, IMG, ROOMS } from "@/lib/data";
import { EnquiryForm } from "../components/Forms";
import { Reveal } from "../components/Motion";
import { PageHero } from "../components/PageHero";
import { Sparkles } from "../components/BgFx";
import {
  ShieldCheckIcon,
  CarTransferIcon,
  BreakfastIcon,
  YogaLotusIcon,
  KeyIcon,
  PhoneIcon,
  MailIcon,
} from "@/lib/icons";
import { CtaNewsletter } from "../components/CtaNewsletter";

export const metadata: Metadata = {
  title: "Enquire Now | Suryavana Hotel & Resort",
  description: "Reserve your luxury sanctuary at Suryavana Hotel & Resort. Best rates guaranteed on direct bookings.",
};

const PERKS = [
  { text: "Best-rate guarantee on all direct sanctuary bookings", icon: ShieldCheckIcon },
  { text: "Complimentary private airport transfer on stays of 3+ nights", icon: CarTransferIcon },
  { text: "Daily organic botanical breakfast included", icon: BreakfastIcon },
  { text: "Complimentary morning yoga & forest meditation session", icon: YogaLotusIcon },
  { text: "Priority villa room selection & upgrade privilege upon availability", icon: KeyIcon },
];

export default function EnquirePage() {
  return (
    <>
      <PageHero
        title="Reserve Your Haven"
        subtitle="Share your journey dates and preferences, and our reservations team will curate your stay."
        image={IMG.cabana}
        crumbs={[{ label: "Enquire Now" }]}
      />

      {/* Main Reservation Section - Header Aligned, 12px Top/Bottom Spacing */}
      <section className="relative isolate mx-auto grid max-w-7xl items-stretch gap-8 px-4 py-4 my-3 sm:px-6 lg:grid-cols-[1fr_380px] lg:gap-10 lg:px-8">
        <Sparkles />
        {/* Left Column: Booking Enquiry Form */}
        <Reveal className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-xl shadow-forest/10 sm:p-10 border border-forest/5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Direct Reservation</span>
            <h2 className="mt-2 mb-4 font-serif text-3xl font-medium text-forest sm:text-4xl">Plan Your Suryavana Escape</h2>
            <Suspense fallback={<div className="min-h-[420px]" />}>
              <EnquiryForm rooms={ROOMS} />
            </Suspense>
          </div>
        </Reveal>

        {/* Right Column: Direct Benefits Card - Equal Height Aligned */}
        <Reveal dir="right" delay={0.1} className="flex h-full flex-col justify-between rounded-3xl bg-forest p-6 text-white shadow-xl sm:p-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Direct Advantages</span>
            <h2 className="mt-1 font-serif text-3xl font-medium">Why Book Direct</h2>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              Enjoy dedicated privileges and personalized care crafted exclusively for guests who reserve directly with Suryavana.
            </p>

            <ul className="mt-6 space-y-4">
              {PERKS.map((perk) => (
                <li key={perk.text} className="flex items-start gap-3.5 text-sm text-white/90">
                  <perk.icon size={18} className="mt-0.5 text-gold shrink-0" />
                  <span>{perk.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-white/15 pt-5 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Prefer to speak with us directly?</p>
            <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="mt-2 inline-flex items-center gap-2 font-serif text-2xl text-gold transition-colors hover:text-white">
              <PhoneIcon size={20} className="text-gold" />
              {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="mt-2 flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold">
              <MailIcon size={16} className="text-gold" />
              {BRAND.email}
            </a>
            <p className="mt-3 text-xs text-white/50">Dedicated Concierge &amp; Personalized Reservations</p>
          </div>
        </Reveal>
      </section>

      {/* Suryavana Circle Newsletter CTA Section */}
      <CtaNewsletter />
    </>
  );
}
