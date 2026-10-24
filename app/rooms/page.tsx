import type { Metadata } from "next";
import { IMG, ROOMS, ROOM_FILTERS } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { RoomsExplorer } from "@/components/RoomsExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { Sparkles } from "@/components/BgFx";
import { roomsContent as content } from "@/lib/data";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        image={IMG[content.hero.imageKey as keyof typeof IMG]}
        crumbs={content.hero.crumbs}
      />
      <section className="relative isolate mx-auto max-w-7xl px-4 py-6 my-3 sm:px-6 lg:px-8">
        <Sparkles />
        <SectionHeading
          center
          eyebrow={content.intro.eyebrow}
          title={content.intro.title}
          text={content.intro.text}
        />
        <div className="mt-8">
          <RoomsExplorer rooms={ROOMS} filters={ROOM_FILTERS} />
        </div>
      </section>
    </>
  );
}
