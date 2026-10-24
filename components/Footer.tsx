"use client";

import Link from "next/link";
import { BRAND } from "@/lib/data";
import { sharedContent as shared } from "@/lib/data";
import { Logo } from "./Logo";
import { Sparkles } from "./BgFx";
import { PhoneIcon, MailIcon, InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon } from "@/lib/icons";

const { footer, site } = shared;


const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
  linkedin: LinkedInIcon,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-forest/20 bg-[#061a12] pb-4 pt-7 text-center text-white/80">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[20rem] w-[20rem] rounded-full bg-gold/10 blur-[90px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[20rem] w-[20rem] rounded-full bg-teal/15 blur-[90px]" />
      <Sparkles />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-block">
          <Logo light size="lg" />
        </div>

        <div className="mt-3 flex flex-col items-center justify-center gap-2 text-xs sm:flex-row sm:gap-0 sm:text-sm">
          <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-5 transition-colors hover:text-gold">
            <PhoneIcon size={15} className="text-gold" />
            {BRAND.phone}
          </a>
          <span className="hidden h-5 w-px bg-white/30 sm:block" aria-hidden="true" />
          <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 px-5 transition-colors hover:text-gold">
            <MailIcon size={15} className="text-gold" />
            {BRAND.email}
          </a>
        </div>

        <p className="mx-auto mt-2.5 max-w-2xl text-xs text-white/70">{BRAND.address}</p>

        <nav aria-label="Footer" className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs sm:text-sm font-medium">
          {footer.links.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/80 transition-colors hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/80">{footer.followLabel}</p>
        <div className="mt-2 mb-4 flex items-center justify-center gap-2">
          {footer.socials.map((item) => {
          const Icon = SOCIAL_ICONS[item.key as keyof typeof SOCIAL_ICONS];
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-forest"
            >
              <Icon size={14} />
            </a>
          );
        })}
        </div>

        <div className="border-t border-white/10 pt-3 text-[0.72rem] text-white/50">
          <p>© {new Date().getFullYear()} {site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
