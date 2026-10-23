import type { Metadata } from "next";
import { GALLERY } from "@/lib/data";
import { GalleryExplorer } from "../components/GalleryExplorer";
import { Reveal } from "../components/Motion";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Sparkles } from "../components/BgFx";

export const metadata: Metadata = {
  title: "Gallery | Suryavana Hotel & Resort",
  description: "Visual impressions of Suryavana Hotel & Resort: Sunrise, Waters, Forest, Stays, and Botanical Table.",
};

export default function GalleryPage() {
  const { hero, categories, items } = GALLERY;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} crumbs={[{ label: "Gallery" }]} />

      <section className="relative isolate py-4 my-3">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Sanctuary Impressions"
            title="Sunrise, Waters, Forest, Stays & Table"
            text="Filter through our visual journey capturing the spirit of Surya (Sun) and Vana (Forest)."
          />
          <Reveal className="mt-8">
            <GalleryExplorer items={items} categories={categories} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
