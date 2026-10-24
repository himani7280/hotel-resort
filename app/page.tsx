import Link from "next/link";
import { EXPERIENCES, HOME, POSTS, ROOMS, TESTIMONIALS } from "@/lib/data";
import { BlogCard, RoomCard } from "@/components/Cards";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Magnetic } from "@/components/Fx";
import { Glows, Sparkles } from "@/components/BgFx";
import { HomeHero } from "@/components/HomeHero";
import { Counter, Reveal, StackList } from "@/components/Motion";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { SunIcon, LeafIcon, ShieldCheckIcon } from "@/lib/icons";
import { homeContent as home } from "@/lib/data";

const PILLAR_ICONS = { sun: SunIcon, leaf: LeafIcon, shield: ShieldCheckIcon } as const;

export default function Home() {
  const [introMain, introSecondary] = HOME.introImages;

  return (
    <>
      <HomeHero images={HOME.heroImages} phrases={HOME.heroPhrases} />

      {/* ── About the Resort ── */}
      <section className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12">
        <Glows />
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left: Text */}
          <div className="flex h-full flex-col justify-between gap-6">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-teal">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                {home.about.eyebrow}
              </p>
              <h2 className="font-serif text-2xl font-medium leading-[1.2] text-forest sm:text-3xl lg:text-[2.25rem]">
                <span className="block">{home.about.titleLine1}</span>
                <span className="block text-gold-gradient italic mt-1 sm:mt-2">
                  {home.about.titleLine2}
                </span>
              </h2>

              <Reveal delay={0.15} className="mt-5 space-y-3 leading-relaxed text-mist text-sm sm:text-base">
                {HOME.introText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>

              {/* Pillars */}
              <div className="mt-6 grid grid-cols-3 gap-3 border-y border-forest/10 py-4 text-forest">
                {home.about.pillars.map((pillar) => {
                  const PillarIcon = PILLAR_ICONS[pillar.icon as keyof typeof PILLAR_ICONS];
                  return (
                    <div key={pillar.label} className="space-y-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <PillarIcon size={16} className="text-gold shrink-0" />
                        <span className="font-serif text-xl font-semibold text-gold sm:text-2xl">
                          <Counter
                            value={pillar.value}
                            suffix={pillar.suffix}
                            decimals={"decimals" in pillar ? pillar.decimals : undefined}
                          />
                        </span>
                      </div>
                      <p className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wider text-mist">{pillar.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <Reveal delay={0.3}>
              <Magnetic>
                <Link href={home.about.cta.href} className="btn-primary btn-gold">
                  {home.about.cta.label}
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          {/* Right: Image Stack */}
          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
            {/* Gold accent frame — desktop only */}
            <div className="pointer-events-none absolute -inset-2.5 hidden rounded-tl-[5.5rem] rounded-br-[5.5rem] rounded-tr-3xl rounded-bl-3xl border-2 border-gold/45 lg:block -z-10 translate-x-2 translate-y-2" />

            {/* Main image */}
            {introMain && (
              <div className="relative h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] w-full overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-2xl rounded-bl-2xl shadow-2xl group border border-forest/10">
                <Photo
                  src={introMain}
                  alt={home.about.mainImageAlt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
                <span className="pointer-events-none absolute top-4 left-4 glass-light text-forest text-[0.68rem] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-md">
                  {home.about.mainImageBadge}
                </span>
              </div>
            )}

            {/* Floating secondary badge image */}
            {introSecondary && (
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 w-36 sm:w-44 md:w-52 overflow-hidden rounded-3xl border-4 border-cream shadow-2xl group animate-float z-10">
                <div className="relative h-28 sm:h-40 w-full">
                  <Photo
                    src={introSecondary}
                    alt={home.about.secondaryImageAlt}
                    sizes="224px"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute bottom-2 left-2 text-[0.65rem] font-medium bg-forest/85 text-gold px-2.5 py-1 rounded-full shadow">
                    {home.about.secondaryImageCaption}
                  </div>
                </div>
              </div>
            )}

            {/* Heritage seal */}
            <span className="pointer-events-none absolute -right-2 sm:-right-3 top-6 hidden h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-full bg-gold text-center text-[0.5rem] sm:text-[0.55rem] font-semibold uppercase leading-tight tracking-[0.2em] text-forest shadow-xl sm:grid border-2 border-cream">
              {home.about.sealLines[0]}<br />{home.about.sealLines[1]}
            </span>
          </div>
        </div>
      </section>

      {/* ── Rooms & Suites ── */}
      <section className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12 bg-sand/60">
        <Glows />
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow={home.rooms.eyebrow}
            title={home.rooms.title}
            text={home.rooms.text}
          />
          <StackList className="mt-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 sm:max-lg:[&>*:nth-child(3)]:hidden">
            {ROOMS.slice(0, 3).map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </StackList>
          <Reveal className="mt-8 text-center">
            <Link href={home.rooms.cta.href} className="btn-primary btn-gold">
              {home.rooms.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Experiences ── */}
      <section className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow={home.experiences.eyebrow}
            title={home.experiences.title}
            text={home.experiences.text}
          />
          <StackList className="mt-8 sm:grid sm:grid-cols-3 sm:gap-6">
            {EXPERIENCES.map((item) => (
              <ExperienceCard key={item.title} item={item} />
            ))}
          </StackList>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12 bg-forest">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            light
            eyebrow={home.testimonials.eyebrow}
            title={home.testimonials.title}
            text={home.testimonials.text}
          />
        </div>
        <div className="mt-6">
          <TestimonialSlider items={TESTIMONIALS} />
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12 bg-sand/60">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow={home.blog.eyebrow}
            title={home.blog.title}
            text={home.blog.text}
          />
          <StackList className="mt-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 sm:max-lg:[&>*:nth-child(3)]:hidden">
            {POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </StackList>
          <Reveal className="mt-8 text-center">
            <Link href={home.blog.cta.href} className="btn-primary btn-gold">
              {home.blog.cta.label}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
