import type { Metadata } from "next";
import Link from "next/link";
import { IMG } from "@/lib/data";
import { Reveal } from "../components/Motion";
import { PageHero } from "../components/PageHero";
import { Photo } from "../components/Photo";
import { Sparkles } from "../components/BgFx";
import { SectionHeading } from "../components/SectionHeading";
import { Spotlight } from "../components/Spotlight";
import { BreakfastIcon, WineIcon, LeafIcon, ClockIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Dining & Coastal Gastronomy | Suryavana Hotel & Resort",
  description: "Experience four oceanfront dining destinations, wood-fired beach grills, organic botanical harvests, and starlit seven-course tasting journeys timed to the setting sun.",
};

const VENUES = [
  {
    name: "The Cliffside Terrace",
    tagline: "Fine Coastal Dining Synchronized with Golden Hour",
    timing: "Breakfast: 07:00 – 10:30 · Dinner: 18:30 – 22:30",
    cuisine: "Goan-Portuguese Tasting Journeys & Curated Cellar Vintages",
    image: IMG.terraceDining,
    description:
      "Perched high above the azure bay, The Cliffside Terrace celebrates the evening transition from radiant sun to twilight stars. Our culinary team presents an artistic seven-course tasting journey that shifts course-by-course as the sun dips below the horizon.",
    highlights: ["Panoramic Ocean Sunset", "Private Wine Cellar", "Chef's Tasting Menu", "Live Sitar Melodies"],
    dressCode: "Smart Resort Casual",
  },
  {
    name: "Coconut Grove Beach Grill",
    tagline: "Barefoot Sand Dining & Wood-Fired Flavors",
    timing: "Lunch: 12:30 – 15:30 · Starlight Barbecue: 19:00 – 23:00",
    cuisine: "Fresh Catamaran Catch, Charcoal Lobster & Tandoori Aromatics",
    image: IMG.grill,
    description:
      "Feel the cool, powdery sands beneath your feet as lanterns flicker in the ocean breeze. Guests choose directly from our iced display of local lobster, kingfish, and tiger prawns, caught at dawn by local fishermen and flame-grilled over seasoned coconut husks.",
    highlights: ["Tables on the Sand", "Live Seafood Display", "Open Coconut-Husk Grill", "Craft Local Ales"],
    dressCode: "Barefoot Beach Chic",
  },
  {
    name: "Vana Botanical Breakfast Pavilion",
    tagline: "Sunrise Elixirs, Tropical Breads & Orchard Bounty",
    timing: "Daily: 06:30 – 11:30",
    cuisine: "Artisanal Sourdough, Cold-Pressed Juices & Ayurvedic Tonics",
    image: IMG.breakfast,
    description:
      "Awaken gently in our open-air pavilion nestled beneath wild teak and bamboo groves. Enjoy farm-fresh honeycomb, seasonal passionfruit, bespoke eggs, warm sourdough loaves from our stone oven, and revitalizing Ayurvedic herbal infusions.",
    highlights: ["Cold-Pressed Juice Bar", "Stone Oven Bakery", "Forest Birdsong", "Apothecary Herbal Teas"],
    dressCode: "Casual Morning Attire",
  },
  {
    name: "Sunset Cabana & Aperitif Lounge",
    tagline: "Botanical Mixology & Starlit Twilight Tapas",
    timing: "Daily: 16:30 – 00:00",
    cuisine: "Artisanal Tapas, Cashew Feni Elixirs & Signature Cocktails",
    image: IMG.cabana,
    description:
      "The resort's premier evening gathering place. Relax on plush daybeds under swaying palms as master mixologists blend single-estate cashew feni, coconut water, kaffir lime, and roasted spices into unforgettable sundowner cocktails.",
    highlights: ["Sunset Daybeds", "Bespoke Botanical Cocktails", "Twilight Acoustic Sessions", "Artisan Mezze Plates"],
    dressCode: "Resort Casual",
  },
];

export default function DiningPage() {
  return (
    <>
      <PageHero
        title="Botanical & Coastal Dining"
        subtitle="Four oceanfront destinations celebrating organic forest harvests, dawn fisherman catches, and wood-fired gastronomy."
        image={IMG.terraceDining}
        crumbs={[{ label: "Dining" }]}
      />

      {/* Philosophy Section */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-4 sm:px-6 lg:px-8">
        <Sparkles />
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Our Culinary Philosophy"
              title="From Surya to Table: Sacred Groves & Ocean Bounty"
              description="At Suryavana, dining is an intimate extension of our sanctuary ethos. Every ingredient honors the sacred balance between Surya—the sun that ripens our estate orchards—and Vana—the rich, fertile forest floor that nurtures our spices and herbs."
            />
            <div className="mt-8 space-y-4 text-ink/80 text-justify [text-align:justify] [text-justify:inter-word] leading-relaxed">
              <p>
                We collaborate closely with traditional catamaran fishermen who cast their nets at dawn, bringing pristine snapper, prawns, and crab directly to our shoreline kitchen within hours of catch.
              </p>
              <p>
                Our botanical gardens provide fragrant lemongrass, curry leaves, turmeric, and black pepper, while our stone flour mill and wood ovens produce rustic breads baked fresh daily at dawn.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="group rounded-2xl border border-forest/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-md">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-sm">
                  <LeafIcon size={18} />
                </span>
                <h4 className="mt-2.5 font-serif text-base font-semibold text-forest group-hover:text-teal transition-colors">100% Organic Estates</h4>
                <p className="mt-1 text-xs text-mist">Heirloom spices &amp; herbs from our forest gardens.</p>
              </div>
              <div className="group rounded-2xl border border-forest/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-md">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-sm">
                  <BreakfastIcon size={18} />
                </span>
                <h4 className="mt-2.5 font-serif text-base font-semibold text-forest group-hover:text-teal transition-colors">Dawn Ocean Catch</h4>
                <p className="mt-1 text-xs text-mist">Sustainable seafood landed fresh at our private jetty.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Reveal dir="zoom" className="relative h-[420px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-2 border-gold/30">
              <Photo src={IMG.dining} alt="Dining at Suryavana" sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full object-cover" />
            </Reveal>
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-4 rounded-2xl bg-forest p-4 text-white shadow-xl border border-gold/25">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-forest font-serif font-bold text-xl">
                4
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">Dining Venues</p>
                <p className="text-xs text-white/80">From beachfront fire grills to cliffside tasting rooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Venues Detail Section */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-8 my-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Restaurants & Lounges"
          title="Four Distinct Culinary Destinations"
          description="Each venue has been architecturally framed to celebrate a unique hour of daylight, from misty dawn forest breakfasts to starlit ocean banquets."
          center
        />

        <div className="mt-12 space-y-12">
          {VENUES.map((venue, idx) => (
            <Reveal key={venue.name} delay={idx * 0.1}>
              <Spotlight className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-forest/5 ring-1 ring-forest/10 transition-all duration-300 hover:shadow-2xl">
                <div className={`grid gap-8 lg:grid-cols-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative h-72 sm:h-84 lg:h-full lg:min-h-[360px] overflow-hidden ${idx % 2 === 1 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}`}>
                    <Photo src={venue.image} alt={venue.name} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                      <p className="text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2.5">Signature Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {venue.highlights.map((h) => (
                          <span key={h} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-forest transition-colors hover:bg-gold hover:text-forest">
                            ✦ {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <Link
                        href="/enquire"
                        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-forest px-7 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-teal shadow-md whitespace-nowrap shrink-0 w-fit"
                      >
                        <span>Reserve Table</span> <span>→</span>
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
              Reserve Your Culinary Journey
            </h3>
            <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
              Whether celebrating a milestone or requesting a quiet corner table for sunset, our dining concierges accommodate dietary preferences and bespoke requirements with effortless grace.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/enquire"
                className="rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-forest shadow-lg transition hover:bg-white"
              >
                Inquire For Table Reservation
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
              >
                Contact Concierge Desk
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
