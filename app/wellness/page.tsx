import type { Metadata } from "next";
import Link from "next/link";
import { IMG } from "@/lib/data";
import { wellnessContent as wellness } from "@/lib/data";
import { Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Sparkles } from "@/components/BgFx";
import { SectionHeading } from "@/components/SectionHeading";
import { Spotlight } from "@/components/Spotlight";
import {
  YogaLotusIcon,
  LeafIcon,
  SunIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  MailIcon,
  ShowerIcon,
} from "@/lib/icons";

export const metadata: Metadata = wellness.metadata;

const img = (key: string): string => (IMG as Record<string, string>)[key] ?? "";

const ICONS = {
  yogaLotus: YogaLotusIcon,
  leaf: LeafIcon,
  sun: SunIcon,
  clock: ClockIcon,
  shieldCheck: ShieldCheckIcon,
  shower: ShowerIcon,
} as const;

const icon = (key: string) => ICONS[key as keyof typeof ICONS];

const [archLeft, archCenter, archRight] = wellness.portals.arches;

export default function WellnessPage() {
  const { portals, treatmentsSection, spacesSection, cta } = wellness;
  const LeftIcon = icon(archLeft.icon);
  const CenterIcon = icon(archCenter.icon);
  const RightIcon = icon(archRight.icon);
  return (
    <>
      <PageHero
        title={wellness.hero.title}
        image={img(wellness.hero.imageKey)}
        crumbs={wellness.hero.crumbs}
      />

      {/* Unique 3-Arch Temple Portico Section - High Visual, Minimal Content */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-3 sm:px-6 lg:px-8">
        <Sparkles />

        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold border border-gold/30">
            {portals.badge}
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-forest leading-[1.2]">
            {portals.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-mist leading-relaxed">
            {portals.text}
          </p>
        </div>

        {/* 3 Temple Arches: Center is Taller & Grand */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* Arch 1: Surya (Left) */}
          <Reveal delay={0.1}>
            <div className="group relative h-[380px] sm:h-[420px] w-full overflow-hidden rounded-t-[4.5rem] rounded-b-3xl border-2 border-forest/15 shadow-xl transition-all duration-500 hover:border-gold/60 hover:shadow-2xl">
              <Photo
                src={img(archLeft.imageKey)}
                alt={archLeft.alt}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
              <span className="absolute top-5 left-5 rounded-full bg-forest/85 backdrop-blur-md px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-gold border border-gold/25">
                {archLeft.badge}
              </span>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-gold/20 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-sm">
                    <LeftIcon size={16} />
                  </span>
                  <h3 className="font-serif text-xl font-medium group-hover:text-gold transition-colors">
                    {archLeft.title}
                  </h3>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {archLeft.text}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Arch 2: Vana (Center - Taller & Highlighted) */}
          <Reveal delay={0.2}>
            <div className="group relative h-[420px] sm:h-[480px] w-full overflow-hidden rounded-t-[5.5rem] rounded-b-3xl border-2 border-gold/70 shadow-2xl ring-4 ring-gold/15 transition-all duration-500 hover:border-gold hover:shadow-gold/20">
              <Photo
                src={img(archCenter.imageKey)}
                alt={archCenter.alt}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-transparent" />
              <span className="absolute top-6 left-6 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-forest shadow-lg">
                {archCenter.badge}
              </span>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-forest transition-all duration-300 group-hover:bg-white group-hover:text-forest group-hover:scale-110 shadow-md">
                    <CenterIcon size={20} />
                  </span>
                  <div>
                    <span className="text-[0.62rem] font-bold uppercase tracking-widest text-gold block">{portals.centerpieceLabel}</span>
                    <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-gold transition-colors">
                      {archCenter.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-white/85 leading-relaxed">
                  {archCenter.text}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Arch 3: Jal (Right) */}
          <Reveal delay={0.3}>
            <div className="group relative h-[380px] sm:h-[420px] w-full overflow-hidden rounded-t-[4.5rem] rounded-b-3xl border-2 border-forest/15 shadow-xl transition-all duration-500 hover:border-gold/60 hover:shadow-2xl">
              <Photo
                src={img(archRight.imageKey)}
                alt={archRight.alt}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
              <span className="absolute top-5 left-5 rounded-full bg-forest/85 backdrop-blur-md px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-gold border border-gold/25">
                {archRight.badge}
              </span>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-gold/20 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-sm">
                    <RightIcon size={16} />
                  </span>
                  <h3 className="font-serif text-xl font-medium group-hover:text-gold transition-colors">
                    {archRight.title}
                  </h3>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {archRight.text}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Floating 4-Hallmark Strip with Background Hover Icons */}
        <div className="mt-8 rounded-2xl bg-white p-4 sm:p-5 shadow-lg border border-forest/10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {portals.hallmarks.map((h) => {
            const HallmarkIcon = icon(h.icon);
            return (
              <div key={h.label} className="group flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-sm">
                  <HallmarkIcon size={16} />
                </span>
                <div>
                  <p className="text-xs font-serif font-bold text-forest group-hover:text-teal transition-colors leading-tight">
                    {h.label}
                  </p>
                  <p className="text-[0.68rem] text-mist">{h.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Signature Treatments Visual Cards (Images Heavy, Content Light) */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-3 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={treatmentsSection.eyebrow}
          title={treatmentsSection.title}
          description={treatmentsSection.description}
          center
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wellness.treatments.map((item, idx) => {
            const ItemIcon = icon(item.icon);
            return (
              <Reveal key={item.title} delay={idx * 0.1}>
                <Spotlight className="group overflow-hidden rounded-[2rem] bg-white shadow-xl border border-forest/10 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-gold/50">
                  <div>
                    {/* Dominant Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Photo
                        src={img(item.imageKey)}
                        alt={item.title}
                        sizes="(min-width: 1024px) 25vw, 100vw"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-forest/90 backdrop-blur-md px-3 py-1 text-[0.65rem] font-bold text-gold border border-gold/25">
                        <ClockIcon size={12} />
                        <span>{item.duration}</span>
                      </div>
                      <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-serif font-bold text-forest shadow">
                        {item.price}
                      </span>
                    </div>

                    {/* Concise Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal/15 text-teal transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-sm">
                          <ItemIcon size={15} />
                        </span>
                        <h3 className="font-serif text-lg font-semibold text-forest group-hover:text-teal transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs text-ink/75 leading-relaxed text-justify [text-align:justify]">
                        {item.caption}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span key={t} className="rounded bg-sand px-2 py-0.5 text-[0.62rem] font-medium text-forest">
                            {treatmentsSection.tagPrefix}{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-forest/10 mt-3 flex items-center justify-between">
                    <Link
                      href={treatmentsSection.book.href}
                      className="text-xs font-bold uppercase tracking-wider text-teal hover:text-gold transition-colors flex items-center gap-1"
                    >
                      {treatmentsSection.book.label} <span>{treatmentsSection.book.arrow}</span>
                    </Link>
                    <span className="text-[0.65rem] text-mist">{treatmentsSection.audience}</span>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Sanctuary Spaces: Pure Visual Showcase (4 High-Res Photo Cards) */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={spacesSection.eyebrow}
          title={spacesSection.title}
          description={spacesSection.description}
          center
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wellness.spaces.map((space, idx) => (
            <Reveal key={space.title} delay={idx * 0.1}>
              <div className="group relative h-80 w-full overflow-hidden rounded-[2rem] border-2 border-forest/10 shadow-xl transition-all duration-500 hover:border-gold/50 hover:shadow-2xl">
                <Photo
                  src={img(space.imageKey)}
                  alt={space.title}
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />

                <span className="absolute top-4 left-4 rounded-full bg-forest/85 backdrop-blur-md px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold border border-gold/20">
                  {space.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-serif text-lg font-medium leading-snug text-white group-hover:text-gold transition-colors">
                    {space.title}
                  </h4>
                  <p className="mt-1 text-xs text-white/80 leading-relaxed">{space.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quick Consultation Banner with Background Hover Icons */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest p-8 sm:p-12 text-center text-white shadow-2xl border border-gold/30">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />

            <h3 className="relative font-serif text-3xl font-medium sm:text-4xl text-white">
              {cta.title}
            </h3>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
              {cta.text}
            </p>

            {/* Quick Contact Badges with Interactive Background Hover */}
            <div className="relative mt-6 flex flex-wrap justify-center gap-6 text-xs text-white/90">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-gold transition-all duration-300 hover:bg-gold hover:text-forest hover:scale-110 shadow-sm">
                  <PhoneIcon size={15} />
                </span>
                <span>{cta.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-gold transition-all duration-300 hover:bg-gold hover:text-forest hover:scale-110 shadow-sm">
                  <MailIcon size={15} />
                </span>
                <span>{cta.email}</span>
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={cta.primary.href}
                className="rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-forest shadow-xl transition-all duration-300 hover:bg-white hover:scale-105"
              >
                {cta.primary.label}
              </Link>
              <Link
                href={cta.secondary.href}
                className="rounded-full border border-white/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
