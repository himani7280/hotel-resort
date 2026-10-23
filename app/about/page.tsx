import type { Metadata } from "next";
import Link from "next/link";
import { HOME, IMG } from "@/lib/data";
import { FlipCard, Reveal, StackList } from "../components/Motion";
import { PageHero } from "../components/PageHero";
import { Photo } from "../components/Photo";
import { Sparkles } from "../components/BgFx";
import { SectionHeading } from "../components/SectionHeading";
import { SunIcon, LeafIcon, YogaLotusIcon, ShieldCheckIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "About Us | Suryavana Hotel & Resort",
  description: "Discover the story of Suryavana Hotel & Resort. Where the sun awakens ancient forest sanctuaries in harmony with luxury eco-hospitality.",
};

export default function AboutPage() {
  const { story, values } = HOME.about;
  const [main, second, third] = story;

  const valueIcons = [SunIcon, LeafIcon, YogaLotusIcon, ShieldCheckIcon];

  return (
    <>
      <PageHero
        title="A Haven of Sun & Forest"
        subtitle="Twelve years of warm welcomes, gentle sunbeams, and the timeless pace of the sanctuary."
        image={IMG.whiteVilla}
        crumbs={[{ label: "About Us" }]}
      />

      {/* Story Section - Header Aligned, Rich 4-Image Editorial Collage */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-4 my-3 sm:px-6 lg:px-8">
        <Sparkles />
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Rich Editorial Architectural Gallery */}
          <div className="flex flex-col justify-between h-full gap-4">
            {/* Grand top image with arched curvature */}
            {main && (
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-[4rem] rounded-b-2xl shadow-xl group border-2 border-gold/30">
                <Photo
                  src={main}
                  alt="Suryavana resort pool and villas"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-4 glass-light text-forest text-[0.68rem] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md pointer-events-none">
                  ✦ Sanctuary Pool &amp; Villas ✦
                </span>
              </div>
            )}

            {/* Middle 2-image row */}
            <div className="grid grid-cols-2 gap-4">
              {second && (
                <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-2xl shadow-md group border border-gold/30">
                  <Photo
                    src={second}
                    alt="Pool deck loungers in sunlight"
                    sizes="25vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute bottom-2 left-2 text-[0.62rem] font-medium bg-forest/90 text-gold px-3 py-1 rounded-full pointer-events-none shadow border border-gold/20">
                    Sun Deck
                  </span>
                </div>
              )}
              {third && (
                <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-2xl shadow-md group border border-gold/30">
                  <Photo
                    src={third}
                    alt="Resort pool at night under stars"
                    sizes="25vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute bottom-2 left-2 text-[0.62rem] font-medium bg-forest/90 text-gold px-3 py-1 rounded-full pointer-events-none shadow border border-gold/20">
                    Night Serenity
                  </span>
                </div>
              )}
            </div>

            {/* Bottom 4th stylish image */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-2xl border-2 border-gold/45 shadow-xl group">
              <Photo
                src={IMG.fountainCourt}
                alt="Fountain courtyard and ancient teak pavilion"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent p-3.5 sm:p-4 pointer-events-none">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs font-serif font-medium tracking-wide">Fountain Courtyard &amp; Ancient Teak Pavilion</p>
                    <p className="text-gold text-[0.65rem] uppercase tracking-wider">Hand-chiseled laterite stone &amp; sustainable architecture</p>
                  </div>
                  <span className="h-7 w-7 grid place-items-center rounded-full bg-gold text-forest text-xs font-bold shadow-md shrink-0 ml-2">
                    ✦
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
              <SectionHeading eyebrow="Our Heritage" title="From Sacred Forest to Sunlit Sanctuary" />
              <Reveal delay={0.15} className="mt-4 space-y-3 leading-relaxed text-forest/85">
                <p>
                  Suryavana was founded in 2013 on an untouched expanse where ancient teak groves and coconut canopies met golden coastal breezes. Our founders envisioned an eco-haven where the pace of life matched the gentle, restorative rhythm of the forest and the sun.
                </p>
                <p>
                  Today, the resort has blossomed into secluded timber villas, hillside suites, organic dining pavilions, and holistic wellness spaces. Yet the founding ethos remains pure: warm hospitality, honest botanical nourishment, and spaces that let your soul breathe deeply.
                </p>
              </Reveal>

              {/* Heritage Hallmarks */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-gold/25">
                <div className="flex items-center gap-2 text-xs font-medium text-forest">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>100% Natural Canopy Preserved</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-forest">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>Solar-Powered &amp; Pure Spring Waters</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-forest">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>Hand-Chiseled Laterite Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-forest">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>Zero Single-Use Plastic Sanctuary</span>
                </div>
              </div>

              {/* Founder quote */}
              <div className="mt-6 rounded-2xl border border-gold/45 bg-white/75 p-5 italic text-forest shadow-sm backdrop-blur-sm">
                <p className="text-sm leading-relaxed">
                  &ldquo;We believe true luxury is space, sunlight filtering through teak leaves, birdsong at dawn, and unhurried stillness.&rdquo;
                </p>
                <p className="mt-2 text-xs font-semibold not-italic uppercase tracking-widest text-gold">
                  — The Suryavana Founders · Est. 2013
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-gold/25 pt-5">
              <Link href="/rooms" className="btn-primary btn-gold">
                Explore Sanctuaries
              </Link>
              <Link href="/contact" className="btn-primary btn-gold">
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Authentic SVG Icons */}
      <section className="relative isolate bg-sand/60 py-4 my-3">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="What We Cherish"
            title="Values That Shape Every Suryavana Stay"
            text="Rooted in reverence for nature, sustainable luxury, and generous hospitality."
          />
          <StackList className="mt-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {values.map((value, i) => {
              const IconComp = valueIcons[i % valueIcons.length];
              return (
                <div key={value.title} className="h-full">
                  <FlipCard
                    className="h-88 sm:h-96"
                    front={
                      <div className="group relative h-full w-full overflow-hidden rounded-3xl">
                        <Photo src={value.image} alt={value.title} sizes="(min-width: 1024px) 25vw, 100vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-forest/10" />
                        <div className="relative flex h-full flex-col justify-between p-7 text-white">
                          <span className="font-serif text-6xl text-gold drop-shadow">0{i + 1}</span>
                          <div>
                            <IconComp size={24} className="text-gold mb-2" />
                            <h3 className="font-serif text-2xl font-medium leading-snug">{value.title}</h3>
                            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">Tap to explore ↻</p>
                          </div>
                        </div>
                      </div>
                    }
                    back={
                      <div className="relative h-full w-full overflow-hidden rounded-3xl">
                        <Photo src={value.image} alt="" sizes="(min-width: 1024px) 25vw, 100vw" className="scale-125 blur-sm" />
                        <div className="absolute inset-0 bg-forest/90" />
                        <div className="relative flex h-full flex-col justify-center p-8 text-white">
                          <IconComp size={28} className="text-gold mb-3" />
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
