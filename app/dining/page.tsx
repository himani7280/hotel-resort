import type { Metadata } from "next";
import Link from "next/link";
import { IMG } from "@/lib/data";
import { diningContent as dining } from "@/lib/data";
import { Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Sparkles } from "@/components/BgFx";
import { SectionHeading } from "@/components/SectionHeading";
import { Spotlight } from "@/components/Spotlight";
import { BreakfastIcon, LeafIcon, ClockIcon } from "@/lib/icons";

export const metadata: Metadata = dining.metadata;

const img = (key: string): string => (IMG as Record<string, string>)[key] ?? "";

const ICONS = { leaf: LeafIcon, breakfast: BreakfastIcon } as const;

export default function DiningPage() {
  const { philosophy, venuesSection, cta } = dining;
  return (
    <>
      <PageHero
        title={dining.hero.title}
        subtitle={dining.hero.subtitle}
        image={img(dining.hero.imageKey)}
        crumbs={dining.hero.crumbs}
      />

      {/* Philosophy Section - Left/Right Aligned Layout */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-4 sm:px-6 lg:px-8">
        <Sparkles />
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Left-aligned Editorial Content */}
          <div className="flex h-full flex-col justify-between text-left">
            <p className="inline-flex items-center gap-2.5 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.28em] text-teal">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              {philosophy.eyebrow}
            </p>
            <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium leading-[1.2] text-forest">
              {philosophy.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-forest/90">
              {philosophy.description}
            </p>
            <div className="mt-4 space-y-3.5 text-left text-sm sm:text-base leading-relaxed text-mist">
              {philosophy.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {philosophy.badges.map((b) => {
                const Icon = ICONS[b.icon as keyof typeof ICONS];
                return (
                  <div
                    key={b.title}
                    className="group rounded-2xl border border-forest/10 bg-white p-4.5 shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-md"
                  >
                    <span className={`grid h-10 w-10 place-items-center rounded-xl ${b.iconWrapClass} transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-sm`}>
                      <Icon size={18} />
                    </span>
                    <h4 className="mt-2.5 font-serif text-base font-semibold text-forest group-hover:text-teal transition-colors">
                      {b.title}
                    </h4>
                    <p className="mt-1 text-xs text-mist leading-relaxed">{b.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Image & Stat Card */}
          <div className="relative flex flex-col h-full min-h-[380px] sm:min-h-[440px] lg:min-h-0">
            <Reveal dir="zoom" className="relative flex-1 h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-gold/30 group">
              <Photo
                src={img(philosophy.imageKey)}
                alt={philosophy.imageAlt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
            </Reveal>

            <div className="absolute -bottom-5 left-4 sm:-bottom-6 sm:-left-6 flex items-center gap-4 rounded-2xl bg-forest p-4 text-white shadow-2xl border border-gold/30">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold text-forest font-serif font-bold text-xl shadow-md">
                {philosophy.stat.number}
              </div>
              <div className="min-w-0 pr-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-gold">{philosophy.stat.label}</p>
                <p className="text-xs text-white/80 line-clamp-1">{philosophy.stat.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Venues Detail Section */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={venuesSection.eyebrow}
          title={venuesSection.title}
          description={venuesSection.description}
          center
        />

        <div className="mt-12 space-y-12">
          {dining.venues.map((venue, idx) => (
            <Reveal key={venue.name} delay={idx * 0.1}>
              <Spotlight className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-forest/5 ring-1 ring-forest/10 transition-all duration-300 hover:shadow-2xl">
                <div className={`grid gap-8 lg:grid-cols-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative h-72 sm:h-84 lg:h-full lg:min-h-[360px] overflow-hidden ${idx % 2 === 1 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}`}>
                    <Photo src={img(venue.imageKey)} alt={venue.name} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-forest/85 backdrop-blur-md px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold border border-gold/20">
                      {venue.dressCode}
                    </span>
                  </div>

                  <div className={`p-6 sm:p-8 lg:p-10 ${idx % 2 === 1 ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}`}>
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-teal">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-teal/15 text-teal transition-all duration-300 hover:bg-gold hover:text-forest">
                        <ClockIcon size={14} />
                      </span>
                      <span>{venue.timing}</span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-forest group-hover:text-teal transition-colors">
                      {venue.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gold">{venue.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75 text-justify [text-align:justify] [text-justify:inter-word]">
                      {venue.description}
                    </p>

                    <div className="mt-6 border-t border-forest/10 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2.5">{venuesSection.highlightsLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {venue.highlights.map((h) => (
                          <span key={h} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-forest transition-colors hover:bg-gold hover:text-forest">
                            {venuesSection.highlightPrefix}{h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <Link
                        href={venuesSection.reserve.href}
                        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-forest px-7 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-teal shadow-md whitespace-nowrap shrink-0 w-fit"
                      >
                        <span>{venuesSection.reserve.label}</span> <span>{venuesSection.reserve.arrow}</span>
                      </Link>
                      <span className="text-xs text-mist font-medium">{venue.cuisine}</span>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest p-8 sm:p-12 text-center text-white shadow-2xl">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />
            <h3 className="relative font-serif text-3xl font-medium sm:text-4xl">
              {cta.title}
            </h3>
            <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
              {cta.text}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={cta.primary.href}
                className="rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-forest shadow-lg transition hover:bg-white"
              >
                {cta.primary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
