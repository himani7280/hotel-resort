import Link from "next/link";
import { EXPERIENCES, HOME, ROOMS } from "@/lib/data";
import { RoomCard } from "./components/Cards";
import { ExperienceCard } from "./components/ExperienceCard";
import { Magnetic } from "./components/Fx";
import { Glows, Sparkles } from "./components/BgFx";
import { HomeHero } from "./components/HomeHero";
import { Counter, PhotoMarquee, Reveal, StackList } from "./components/Motion";
import { Photo } from "./components/Photo";
import { SectionHeading } from "./components/SectionHeading";
import { SunIcon, LeafIcon, ShieldCheckIcon } from "@/lib/icons";

export default function Home() {
  const [introMain, introSecondary] = HOME.introImages;

  return (
    <>
      <HomeHero images={HOME.heroImages} phrases={HOME.heroPhrases} />

      {/* Intro Section - 12px Top & Bottom Spacing, Header Aligned */}
      <section className="relative isolate overflow-hidden py-3 my-3">
        <Glows />
        <Sparkles />
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="flex h-full flex-col justify-between py-2">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-teal">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                About the resort
              </p>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[1.95rem] xl:text-[2.25rem] font-medium leading-[1.25] text-forest">
                <span className="block whitespace-nowrap text-nowrap">A Sunlit Forest Sanctuary</span>
                <span className="block text-gold-gradient italic mt-1 sm:mt-1.5 whitespace-nowrap text-nowrap">Where Nature Whispers &amp; Luxury Abides</span>
              </h2>

              <Reveal delay={0.15} className="mt-4 space-y-3 leading-relaxed text-mist">
                {HOME.introText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>

              {/* Pillars with animated scroll counters */}
              <div className="mt-6 grid grid-cols-1 gap-3 border-y border-forest/10 py-4 text-forest sm:grid-cols-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <SunIcon size={18} className="text-gold" />
                    <span className="font-serif text-2xl font-semibold text-gold sm:text-3xl">
                      <Counter value={12} suffix="+" />
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mist">Years of Haven</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <LeafIcon size={18} className="text-gold" />
                    <span className="font-serif text-2xl font-semibold text-gold sm:text-3xl">
                      <Counter value={100} suffix="%" />
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mist">Solar & Eco-Built</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheckIcon size={18} className="text-gold" />
                    <span className="font-serif text-2xl font-semibold text-gold sm:text-3xl">
                      <Counter value={4.9} decimals={1} suffix=" / 5" />
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mist">Guest Rating</p>
                </div>
              </div>
            </div>

            <Reveal delay={0.3} className="pt-4">
              <Magnetic>
                <Link href="/about" className="btn-primary btn-gold">
                  Discover Our Story
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          <div className="relative flex h-full min-h-[440px] items-center justify-center sm:min-h-[500px]">
            {/* Architectural offset gold accent frame */}
            <div className="pointer-events-none absolute -inset-2.5 hidden rounded-tl-[5.5rem] rounded-br-[5.5rem] rounded-tr-3xl rounded-bl-3xl border-2 border-gold/45 sm:block -z-10 translate-x-2 translate-y-2" />

            {/* Main image with luxury asymmetric organic shape */}
            {introMain && (
              <div className="relative h-full min-h-[440px] w-full overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-2xl rounded-bl-2xl shadow-2xl group border border-forest/10 sm:min-h-[500px]">
                <Photo
                  src={introMain}
                  alt="Suryavana resort terrace and pool at golden hour"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
                <span className="pointer-events-none absolute top-4 left-4 glass-light text-forest text-[0.68rem] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-md">
                  ✦ Sanctuary Vista
                </span>
              </div>
            )}

            {/* Floating secondary badge image */}
            {introSecondary && (
              <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-5 w-44 sm:w-52 overflow-hidden rounded-3xl border-4 border-cream shadow-2xl group animate-float">
                <div className="relative h-36 sm:h-44 w-full">
                  <Photo
                    src={introSecondary}
                    alt="Courtyard fountain pool"
                    sizes="224px"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute bottom-2 left-2 text-[0.65rem] font-medium bg-forest/85 text-gold px-2.5 py-1 rounded-full shadow">
                    Fountain Courtyard
                  </div>
                </div>
              </div>
            )}

            {/* Heritage seal badge */}
            <span className="pointer-events-none absolute -right-3 top-6 hidden h-24 w-24 place-items-center rounded-full bg-gold text-center text-[0.55rem] font-semibold uppercase leading-tight tracking-[0.2em] text-forest shadow-xl sm:grid border-2 border-cream">
              Est.
              <br />
              2013
            </span>
          </div>
        </div>
      </section>

      {/* Rooms & Suites - 12px Spacing, Header Aligned */}
      <section className="relative isolate overflow-hidden bg-sand/60 py-3 my-3">
        <Glows />
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Rooms & suites"
            title="Rooms Designed for Rest & Reconnection"
            text="From sunlit garden hideaways to overwater villas, each space is crafted for restorative sleep and tranquil forest mornings."
          />
          <StackList className="mt-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 sm:max-lg:[&>*:nth-child(3)]:hidden">
            {ROOMS.slice(0, 3).map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </StackList>
          <Reveal className="mt-8 text-center">
            <Link href="/rooms" className="btn-primary btn-gold">
              View All Rooms
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Experiences - 12px Spacing, Header Aligned */}
      <section className="relative isolate overflow-hidden py-3 my-3">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Experiences"
            title="Sacred Rituals & Forest Adventures"
            text="Awaken your senses through dawn yoga, guided forest bathing, and private candlelit dinners."
          />
          <StackList className="mt-8 sm:grid sm:grid-cols-3 sm:gap-6">
            {EXPERIENCES.map((item) => (
              <ExperienceCard key={item.title} item={item} />
            ))}
          </StackList>
        </div>
      </section>

      {/* Moments Gallery - 12px Spacing, Header Aligned */}
      <section className="overflow-hidden bg-sand/60 py-3 my-3">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Gallery" title="Moments Worth Framing" />
        </div>
        <Reveal dir="blur" className="mt-8 space-y-3 pb-6">
          <PhotoMarquee images={HOME.gallery.slice(0, 6)} />
          <PhotoMarquee images={HOME.gallery.slice(6, 12)} reverse />
        </Reveal>
      </section>
    </>
  );
}
