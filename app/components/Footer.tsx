"use client";

import Link from "next/link";
import { BRAND } from "@/lib/data";
import { Logo } from "./Logo";
import { Sparkles } from "./BgFx";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "@/lib/icons";

export function Footer() {
  const quickLinksLeft = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Dining", href: "/dining" },
  ];

  const quickLinksRight = [
    { label: "Wellness", href: "/wellness" },
    { label: "Gallery", href: "/gallery" },
    { label: "Enquire Now", href: "/enquire" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#061a12] text-white/80 pt-8 pb-4 border-t border-forest/20">
      {/* Decorative ambient glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[20rem] w-[20rem] rounded-full bg-gold/10 blur-[90px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[20rem] w-[20rem] rounded-full bg-teal/15 blur-[90px]" />
      <Sparkles />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3 Columns Layout: Col 1 Logo + 4 Icons, Col 2 Quick Links (2 Cols), Col 3 Guest Concierge */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 pb-6 border-b border-white/10 items-start">
          {/* Column 1: Logo & 4 Social Icons (Last icon changed to X) */}
          <div className="space-y-3.5">
            <Link href="/" aria-label="Suryavana Hotel & Resort" className="inline-block">
              <Logo light size="lg" />
            </Link>

            {/* Exactly 4 Social Icons directly underneath (Instagram, Facebook, YouTube, X) */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
                { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
                { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com" },
                { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid h-8.5 w-8.5 place-items-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-forest shadow-md"
                >
                  <item.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links in 2 Columns */}
          <div>
            <h3 className="font-serif text-base text-white font-medium mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-xs">
              <ul className="space-y-2">
                {quickLinksLeft.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-all hover:pl-1 hover:text-gold block text-white/75">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {quickLinksRight.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-all hover:pl-1 hover:text-gold block text-white/75">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Guest Concierge */}
          <div>
            <h3 className="font-serif text-base text-white font-medium mb-3">Guest Concierge</h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5 group">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest hover:scale-110 shadow-sm mt-0.5">
                  <MapPinIcon size={13} />
                </span>
                <span className="text-white/80 transition-colors group-hover:text-white">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest hover:scale-110 shadow-sm">
                  <PhoneIcon size={13} />
                </span>
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors font-medium text-white/90">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest hover:scale-110 shadow-sm">
                  <MailIcon size={13} />
                </span>
                <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors font-medium text-white/90">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Grand Brand Name: Theme Forest Green tone, one subtle shade from footer background */}
        <div className="pt-6 pb-2 text-center select-none overflow-hidden">
          <span
            className="block font-serif text-[8vw] md:text-[7vw] font-bold tracking-[0.22em] leading-none text-[#123829] uppercase transition-all duration-500 hover:text-[#184d38] hover:scale-[1.01]"
            style={{
              textShadow:
                "0 1px 2px rgba(255, 255, 255, 0.04), 0 0 30px rgba(18, 56, 41, 0.35)",
            }}
          >
            SURYAVANA
          </span>
        </div>

        {/* Footer Bottom: Left Corner Copyright with Powered by Lestow */}
        <div className="border-t border-white/10 pt-3 text-left text-xs text-white/50">
          <p>© {new Date().getFullYear()} Suryavana Hotel &amp; Resort. All rights reserved. Powered by Lestow.</p>
        </div>
      </div>
    </footer>
  );
}
