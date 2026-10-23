import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, IMG } from "@/lib/data";
import { PageHero } from "../components/PageHero";
import { ShieldCheckIcon, PhoneIcon, MailIcon, WhatsAppIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Thank You | Suryavana Hotel & Resort",
  description: "Thank you for contacting Suryavana Hotel & Resort. Our concierge team will connect with you shortly.",
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank You"
        subtitle="Your enquiry has been received with warmth. We look forward to welcoming you."
        image={IMG.poolResort}
        crumbs={[{ label: "Thank You" }]}
      />

      <section className="relative isolate mx-auto max-w-4xl px-4 py-8 my-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-2xl shadow-forest/10 border border-forest/5 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 text-gold mb-6 ring-8 ring-gold/10">
            <ShieldCheckIcon size={40} className="text-gold" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Enquiry Confirmed</span>
          <h2 className="mt-2 font-serif text-3xl font-medium text-forest sm:text-5xl">
            We Have Received Your Request
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist">
            Thank you for reaching out to <strong className="text-forest font-semibold">Suryavana Hotel &amp; Resort</strong>. Our reservations and concierge team is reviewing your preferences and will respond within 2 to 4 hours with tailored stay options and best direct rates.
          </p>

          <div className="mt-8 rounded-2xl bg-sand/40 border border-forest/10 p-5 max-w-md mx-auto text-sm text-forest">
            <p className="text-xs uppercase tracking-widest text-mist font-semibold">Sanctuary Guarantee</p>
            <p className="mt-1.5 font-serif text-lg font-medium text-forest">Direct Booking Confirmation &amp; Best Rate Privilege</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-forest/10 pt-8">
            <Link href="/" className="btn-primary btn-gold px-8 py-3.5 text-xs tracking-wider">
              Return to Homepage
            </Link>
            <Link href="/rooms" className="btn-primary btn-gold px-8 py-3.5 text-xs tracking-wider">
              Explore Sanctuaries
            </Link>
            <Link href="/gallery" className="btn-primary btn-gold px-8 py-3.5 text-xs tracking-wider">
              View Gallery
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-forest/10 text-xs text-mist">
            <p>Need urgent assistance with your travel plans? Connect with us immediately:</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-6 text-sm text-forest font-medium">
              <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <PhoneIcon size={16} className="text-gold" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <MailIcon size={16} className="text-gold" />
                {BRAND.email}
              </a>
              <a href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <WhatsAppIcon size={16} className="text-gold" />
                WhatsApp Concierge
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
