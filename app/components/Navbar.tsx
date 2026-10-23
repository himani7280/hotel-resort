"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/data";
import { useIntroDone } from "@/lib/intro";
import { Logo } from "./Logo";
import { Sparkles } from "./BgFx";
import { PhoneIcon, MailIcon } from "@/lib/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const done = useIntroDone();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isHome = pathname === "/";
  const logoSize = isHome && !scrolled ? "xl" : "sm";

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={done ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.8, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-6 sm:pt-3"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
            scrolled || open
              ? "bg-forest/90 py-2 shadow-2xl shadow-black/25 ring-1 ring-white/10 backdrop-blur-xl"
              : isHome ? "bg-transparent py-4 sm:py-5" : "bg-transparent py-2.5 sm:py-3"
          }`}
        >
          <Link
            href="/"
            aria-label="Suryavana Hotel & Resort home"
            onClick={() => setOpen(false)}
            className="shrink-0 transition-all duration-500"
          >
            <Logo light size={logoSize} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                  isActive(link.href) ? "text-gold" : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </Link>
            ))}
            <Link href="/enquire" className="btn-primary btn-gold ml-4 px-6! py-2.5! text-[0.7rem]!">
              Enquire Now
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative ml-auto grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white lg:hidden"
          >
            <span className={`absolute h-0.5 w-5 bg-current transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute h-0.5 w-5 bg-current transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md lg:hidden"
            />

            {/* Luxury Sanctuary Slide-In Drawer */}
            <motion.nav
              key="mobile-drawer"
              aria-label="Mobile Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: EASE }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#061811] via-[#092218] to-[#04120c] p-6 shadow-2xl border-l border-gold/30 lg:hidden"
            >
              {/* Decorative radial glows */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />
              <Sparkles />

              {/* Drawer Header: Logo & Luxury Close Button */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
                <Link href="/" onClick={() => setOpen(false)}>
                  <Logo light size="sm" />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:bg-gold hover:text-forest"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Staggered Navigation Links */}
              <div className="relative z-10 my-auto py-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold/80 mb-3">
                  Sanctuary Navigation
                </p>
                <ul className="space-y-2">
                  {NAV_LINKS.map((link, index) => {
                    const active = isActive(link.href);
                    const taglines = [
                      "Sanctuary & Forest Hideaway",
                      "Our Heritage & Philosophy",
                      "Timber Villas & Suites",
                      "Moments in Suryavana",
                      "Journals & Concierge Guides",
                      "Reservations & Map",
                    ];
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ x: 25, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.12 + 0.04 * index, duration: 0.45, ease: EASE }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`group flex items-center justify-between py-2 border-b border-white/5 transition-colors ${
                            active ? "text-gold" : "text-white hover:text-gold"
                          }`}
                        >
                          <div>
                            <span className="font-serif text-2xl font-medium tracking-tight block">
                              {link.label}
                            </span>
                            <span className="text-[0.68rem] tracking-wider text-white/50 group-hover:text-gold/70 transition-colors block">
                              {taglines[index] ?? "Suryavana Retreat"}
                            </span>
                          </div>
                          <span className="font-sans text-xs font-semibold tracking-widest text-gold/60 group-hover:text-gold transition-colors">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Drawer Footer: VIP Action & Direct Contact */}
              <div className="relative z-10 border-t border-white/10 pt-5 space-y-3">
                <Link
                  href="/enquire"
                  onClick={() => setOpen(false)}
                  className="btn-primary btn-gold w-full text-center text-xs py-3.5 tracking-widest shadow-xl block"
                >
                  Book Sanctuary Stay
                </Link>

                <div className="flex items-center justify-between pt-1 text-xs text-white/70">
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                    <PhoneIcon size={14} className="text-gold" />
                    <span>{BRAND.phone}</span>
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
                    <MailIcon size={14} className="text-gold" />
                    <span>{BRAND.email}</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
