import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, IMG } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { ShieldCheckIcon, PhoneIcon, MailIcon } from "@/lib/icons";
import { miscContent as misc } from "@/lib/data";

const page = misc.thankYou;

export const metadata: Metadata = {
  title: page.metadata.title,
  description: page.metadata.description,
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        image={IMG[page.hero.imageKey as keyof typeof IMG]}
        crumbs={page.hero.crumbs}
      />

      <section className="relative isolate mx-auto max-w-3xl px-4 py-8 my-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-2xl shadow-forest/10 border border-forest/5 text-center">
          <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold/15 text-gold mb-5 sm:mb-6 ring-8 ring-gold/10">
            <ShieldCheckIcon size={36} className="text-gold sm:w-10 sm:h-10" />
          </div>

          <span className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gold">{page.eyebrow}</span>
          <h2 className="mt-2 font-serif text-2xl font-medium text-forest sm:text-3xl lg:text-[2.25rem] leading-tight">
            {page.heading}
          </h2>

          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-mist">
            {page.textBefore}<strong className="text-forest font-semibold">{page.brandName}</strong>{page.textAfter}
          </p>

          <div className="mt-6 sm:mt-8 rounded-2xl bg-sand/40 border border-forest/10 p-4 sm:p-5 max-w-md mx-auto text-sm text-forest">
            <p className="text-[0.68rem] sm:text-xs uppercase tracking-widest text-mist font-semibold">{page.guarantee.label}</p>
            <p className="mt-1 font-serif text-base sm:text-lg font-medium text-forest">{page.guarantee.text}</p>
          </div>

          <div className="mt-8 flex items-center justify-center border-t border-forest/10 pt-6">
            {page.links.map((link) => (
              <Link key={link.href} href={link.href} className="btn-primary btn-gold px-8 py-3.5 text-xs tracking-wider inline-flex items-center gap-2">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-forest/10 text-xs text-mist">
            <p>{page.urgent}</p>
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-forest font-medium">
              <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <PhoneIcon size={16} className="text-gold" />
                {BRAND.phone}
              </a>
              <span className="hidden sm:inline text-mist/40">&bull;</span>
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <MailIcon size={16} className="text-gold" />
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
