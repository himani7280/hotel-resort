import type { Metadata } from "next";
import { IMG, ROOMS, ROOM_FILTERS } from "@/lib/data";
import { PageHero } from "../components/PageHero";
import { RoomsExplorer } from "../components/RoomsExplorer";
import { SectionHeading } from "../components/SectionHeading";
import { Sparkles } from "../components/BgFx";

export const metadata: Metadata = {
  title: "Rooms & Suites | Suryavana Hotel & Resort",
  description: "Explore luxury timber villas, forest suites, and overwater residences at Suryavana Hotel & Resort.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="Rooms & Suites"
        subtitle="Sanctuaries crafted for restorative sleep, gentle forest breezes, and golden dawn sunbeams."
        image={IMG.roomOverwater}
        crumbs={[{ label: "Rooms & Suites" }]}
      />
      <section className="relative isolate mx-auto max-w-7xl px-4 py-6 my-3 sm:px-6 lg:px-8">
        <Sparkles />
        <SectionHeading
          center
          eyebrow="Choose your haven"
          title="Find the Sanctuary That Speaks to You"
          text="From tranquil forest gardens to overwater cliffside pavilions, each space harmonizes with surrounding nature."
        />
        <div className="mt-8">
          <RoomsExplorer rooms={ROOMS} filters={ROOM_FILTERS} />
        </div>
      </section>
    </>
  );
}
