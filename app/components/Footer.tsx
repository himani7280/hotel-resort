"use client";

import Link from "next/link";
import { BRAND, NAV_LINKS, ROOMS } from "@/lib/data";
import { Logo } from "./Logo";
import { Sparkles } from "./BgFx";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  XIcon,
  WhatsAppIcon,
  ShieldCheckIcon,
} from "@/lib/icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061a12] text-white/80 pt-14 pb-8 border-t border-forest/20">
      {/* Decorative ambient glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-teal/15 blur-[100px]" />
      <Sparkles />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Luxury Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-6">
            <Link href="/" aria-label="Suryavana Hotel & Resort" className="inline-block">
              <Logo light size="lg" />
            </Link>
            <p className="text-sm leading-relaxed text-white/75">
              A sun-kissed eco-luxury sanctuary nestled between verdant forest canopies, misted emerald peaks, and tranquil coastal waters in Goa.
            </p>

            {/* Social Icons with Real SVGs */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Connect With Us</p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
                  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
                  { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com" },
                  { icon: XIcon, label: "X", href: "https://x.com" },
                  { icon: WhatsAppIcon, label: "WhatsApp", href: `https://wa.me/${BRAND.phone.replace(/[^0-9]/g, "")}` },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-forest shadow-md"
                  >
                    <item.icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Eco Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs text-gold">
              <ShieldCheckIcon size={14} className="text-gold" />
              <span>Certified Sustainable Eco-Sanctuary 2026</span>
            </div>
          </div>

          {/* Column 2: Sanctuaries (Rooms) */}
          <div>
            <h3 className="font-serif text-xl text-white font-medium mb-5">Sanctuaries</h3>
            <ul className="space-y-3 text-sm">
              {ROOMS.slice(0, 5).map((room) => (
                <li key={room.slug}>
                  <Link href={`/rooms/${room.slug}`} className="transition-all hover:pl-2 hover:text-gold block">
                    {room.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/rooms" className="text-xs font-semibold uppercase tracking-wider text-gold hover:underline">
                  View All Sanctuaries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="font-serif text-xl text-white font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-all hover:pl-2 hover:text-gold block">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/enquire" className="transition-all hover:pl-2 hover:text-gold block">
                  Enquire Now
                </Link>
              </li>
              <li>
                <Link href="/thank-you" className="transition-all hover:pl-2 hover:text-gold block">
                  Booking Confirmation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Concierge & Contact with Real SVGs */}
          <div>
            <h3 className="font-serif text-xl text-white font-medium mb-5">Guest Concierge</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={18} className="text-gold shrink-0" />
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors font-medium">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon size={18} className="text-gold shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors font-medium">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Left Corner Copyright with Powered by Lestow */}
        <div className="pt-6 text-left text-xs text-white/50">
          <p>© {new Date().getFullYear()} Suryavana Hotel &amp; Resort. All rights reserved. Powered by Lestow.</p>
        </div>
      </div>
    </footer>
  );
}
