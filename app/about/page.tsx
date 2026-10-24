import type { Metadata } from "next";
import Link from "next/link";
import { HOME, IMG } from "@/lib/data";
import { FlipCard, Reveal, StackList } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Sparkles } from "@/components/BgFx";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent as about } from "@/lib/data";
import { SunIcon, LeafIcon, YogaLotusIcon, ShieldCheckIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: about.metadata.title,
  description: about.metadata.description,
};

export default function AboutPage() {
  const { story, values, mission, vision, whyUs } = HOME.about;
  const [main, second, third] = story;
  const { gallery, heritage } = about;

  const valueIcons = [SunIcon, LeafIcon, YogaLotusIcon, ShieldCheckIcon];
  const missionVision = [
    { ...mission, icon: SunIcon },
    { ...vision, icon: LeafIcon },
  ];

  return (
    <>
      <PageHero
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        image={IMG[about.hero.imageKey as keyof typeof IMG]}
        crumbs={about.hero.crumbs}
      />

      {/* Story Section - Header Aligned, Rich 4-Image Editorial Collage */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-4 my-3 sm:px-6 lg:px-8">
        <Sparkles />
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Rich Editorial Architectural Gallery */}
          <div className="flex h-full flex-col gap-4">
            {/* Grand top image with arched curvature */}
            {main && (
              <div className="relative min-h-64 flex-1 sm:min-h-72 w-full overflow-hidden rounded-t-[4rem] rounded-b-2xl shadow-xl group border-2 border-gold/30">
                <Photo
                  src={main}
                  alt={gallery.main.alt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-4 glass-light text-forest text-[0.68rem] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md pointer-events-none">
                  {gallery.main.badge}
                </span>
              </div>
            )}

            {/* Middle 2-image row */}
            <div className="grid grid-cols-2 gap-4">
              {second && (
                <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-2xl shadow-md group border border-gold/30">
                  <Photo
                    src={second}
                    alt={gallery.second.alt}
                    sizes="25vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute bottom-2 left-2 text-[0.62rem] font-medium bg-forest/90 text-gold px-3 py-1 rounded-full pointer-events-none shadow border border-gold/20">
                    {gallery.second.badge}
                  </span>
                </div>
              )}
              {third && (
                <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-2xl shadow-md group border border-gold/30">
                  <Photo
                    src={third}
                    alt={gallery.third.alt}
                    sizes="25vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute bottom-2 left-2 text-[0.62rem] font-medium bg-forest/90 text-gold px-3 py-1 rounded-full pointer-events-none shadow border border-gold/20">
                    {gallery.third.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Bottom 4th stylish image */}
            <div className="relative min-h-44 flex-1 sm:min-h-52 w-full overflow-hidden rounded-2xl border-2 border-gold/45 shadow-xl group">
              <Photo
                src={IMG[gallery.fourth.imageKey as keyof typeof IMG]}
                alt={gallery.fourth.alt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent p-3.5 sm:p-4 pointer-events-none">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs font-serif font-medium tracking-wide">{gallery.fourth.title}</p>
                    <p className="text-gold text-[0.65rem] uppercase tracking-wider">{gallery.fourth.subtitle}</p>
                  </div>
                  <span className="h-7 w-7 grid place-items-center rounded-full bg-gold text-forest text-xs font-bold shadow-md shrink-0 ml-2">
                    {gallery.fourth.mark}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy - Luxury Parchment & Gold Card */}
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#faf7f2] via-[#f6efe4] to-[#ede2d0] p-7 sm:p-10 border-2 border-gold/35 shadow-2xl">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />

            <div>
              <SectionHeading eyebrow={heritage.eyebrow} title={heritage.title} />
              <Reveal delay={0.15} className="mt-4 space-y-3 leading-relaxed text-forest/85">
                {heritage.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>

              {/* Heritage Hallmarks */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-gold/25">
                {heritage.hallmarks.map((hallmark) => (
                  <div key={hallmark} className="flex items-center gap-2 text-xs font-medium text-forest">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span>{hallmark}</span>
                  </div>
                ))}
              </div>

              {/* Founder quote */}
              <div className="mt-6 rounded-2xl border border-gold/45 bg-white/75 p-5 italic text-forest shadow-sm backdrop-blur-sm">
                <p className="text-sm leading-relaxed">
                  {heritage.quote.text}
                </p>
                <p className="mt-2 text-xs font-semibold not-italic uppercase tracking-widest text-gold">
                  {heritage.quote.author}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-gold/25 pt-5">
              {heritage.buttons.map((button) => (
                <Link key={button.href} href={button.href} className="btn-primary btn-gold">
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-3 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow={about.missionVision.eyebrow} title={about.missionVision.title} />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {missionVision.map(({ title, text, icon: Icon }, idx) => {
            const isMission = idx === 0;
            return (
              <Reveal key={title} delay={idx * 0.15}>
                <div
                  className={`group relative h-full overflow-hidden border-2 border-gold/40 bg-gradient-to-br from-[#faf7f2] via-[#f7f2e8] to-[#eee4d4] p-8 sm:p-10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-gold ${
                    isMission
                      ? "rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
                      : "rounded-tr-none rounded-tl-3xl rounded-bl-3xl rounded-br-3xl"
                  }`}
                >
                  {/* Decorative sharp-corner gold accent bracket */}
                  <div
                    className={`absolute top-0 ${
                      isMission ? "left-0 border-t-[4px] border-l-[4px]" : "right-0 border-t-[4px] border-r-[4px]"
                    } border-gold h-8 w-8`}
                  />

                  {/* Faint luxury background watermark */}
                  <span className="pointer-events-none absolute -bottom-6 -right-6 font-serif text-9xl text-forest/5 select-none transition-transform duration-700 group-hover:scale-110">
                    {isMission ? "M" : "V"}
                  </span>

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-gold shadow-lg shadow-forest/20 ring-2 ring-gold/40 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={26} />
                      </span>
                      <span className="rounded-full bg-forest/10 px-3.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-forest/70 border border-forest/10">
                        {isMission ? "Our Purpose" : "Our Horizon"}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-medium text-forest">{title}</h3>
                    <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-forest/80 font-normal">{text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative isolate my-3 overflow-hidden bg-forest py-12 sm:py-16">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            light
            eyebrow={about.whyUs.eyebrow}
            title={about.whyUs.title}
            text={about.whyUs.text}
          />
          <StackList className="mt-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {whyUs.map((item, i) => {
              const WhyIcon = valueIcons[i % valueIcons.length];
              return (
                <div
                  key={item.title}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 sm:p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_16px_36px_rgba(212,175,55,0.18)]"
                >
                  {/* Subtle top gold accent glow on hover */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Header: Icon & Numeral */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold border border-gold/30 shadow-md transition-all duration-500 group-hover:bg-gold group-hover:text-forest group-hover:scale-110">
                        <WhyIcon size={22} />
                      </span>
                      <span className="font-serif text-3xl font-light text-gold/35 transition-colors duration-300 group-hover:text-gold">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-medium text-white group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom micro accent */}
                  <div className="mt-6 flex items-center gap-1.5 text-xs text-gold/60 group-hover:text-gold transition-colors duration-300">
                    <span className="h-px w-6 bg-gold/40 group-hover:w-10 transition-all duration-300" />
                    <span className="text-[0.65rem] uppercase tracking-widest font-semibold">Sanctuary Detail</span>
                  </div>
                </div>
              );
            })}
          </StackList>
        </div>
      </section>

      {/* Values Section with Authentic SVG Icons */}
      <section className="relative isolate bg-sand/60 py-4 my-3">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow={about.values.eyebrow}
            title={about.values.title}
            text={about.values.text}
          />
          <StackList className="mt-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {values.map((value, i) => {
              const IconComp = valueIcons[i % valueIcons.length];
              return (
                <div key={value.title} className="h-full">
                  <FlipCard
                    className="h-88 sm:h-96"
                    front={
                      <div className="group relative h-full w-full overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none">
                        <Photo src={value.image} alt={value.title} sizes="(min-width: 1024px) 25vw, 100vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-forest/10" />
                        <div className="relative flex h-full flex-col justify-between p-7 text-white">
                          <span className="font-serif text-6xl text-gold drop-shadow">0{i + 1}</span>
                          <div>
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-md mb-3">
                              <IconComp size={20} />
                            </span>
                            <h3 className="font-serif text-2xl font-medium leading-snug">{value.title}</h3>
                            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">{about.values.flipHint}</p>
                          </div>
                        </div>
                      </div>
                    }
                    back={
                      <div className="relative h-full w-full overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none">
                        <Photo src={value.image} alt="" sizes="(min-width: 1024px) 25vw, 100vw" className="scale-125 blur-sm" />
                        <div className="absolute inset-0 bg-forest/90" />
                        <div className="relative flex h-full flex-col justify-center p-8 text-white">
                          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-gold transition-all duration-300 hover:bg-gold hover:text-forest hover:scale-110 shadow-md mb-3">
                            <IconComp size={24} />
                          </span>
                          <h3 className="font-serif text-2xl text-gold">{value.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/90">{value.text}</p>
                        </div>
                      </div>
                    }
                  />
                </div>
              );
            })}
          </StackList>
        </div>
      </section>

    </>
  );
}
