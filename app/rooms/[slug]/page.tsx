import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROOMS, getRoom } from "@/lib/data";
import { RoomCard } from "../../components/Cards";
import { Reveal, Stagger, StackList, StaggerItem } from "../../components/Motion";
import { PageHero } from "../../components/PageHero";
import { RoomGallery } from "../../components/RoomGallery";
import { SectionHeading } from "../../components/SectionHeading";
import { getAmenityIcon } from "@/lib/icons";

export const generateStaticParams = () => ROOMS.map((room) => ({ slug: room.slug }));

export async function generateMetadata({ params }: PageProps<"/rooms/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  return { title: room?.name ?? "Room" };
}

export default async function RoomDetailsPage({ params }: PageProps<"/rooms/[slug]">) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const related = ROOMS.filter((item) => item.slug !== room.slug).slice(0, 3);
  const facts = [
    { label: "Size", value: `${room.size} m²` },
    { label: "Guests", value: `Up to ${room.guests}` },
    { label: "Bed", value: room.bed },
    { label: "View", value: room.view },
  ];

  return (
    <>
      <PageHero
        title={room.name}
        subtitle={room.tagline}
        image={room.image}
        crumbs={[{ label: "Rooms & Suites", href: "/rooms" }, { label: room.name }]}
      />

      <section className="relative isolate mx-auto grid max-w-7xl gap-8 px-4 py-4 my-3 sm:px-6 lg:grid-cols-[1fr_360px] lg:gap-10 lg:px-8">
        <div>
          <Reveal>
            <RoomGallery images={[room.image, ...room.gallery]} name={room.name} />
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map((fact) => (
              <StaggerItem key={fact.label}>
                <div className="rounded-2xl bg-white p-5 text-center shadow-md shadow-forest/5">
                  <p className="text-xs uppercase tracking-wider text-mist">{fact.label}</p>
                  <p className="mt-1 font-serif text-lg text-forest">{fact.value}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 space-y-4 leading-relaxed text-mist">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-forest">About this room</h2>
            {room.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-forest">Sanctuary Amenities</h2>
            </Reveal>
            <Stagger className="mt-5 grid gap-3 sm:grid-cols-2">
              {room.amenities.map((amenity) => {
                const IconComp = getAmenityIcon(amenity);
                return (
                  <StaggerItem key={amenity}>
                    <p className="group flex items-center gap-3.5 rounded-xl bg-white px-4 py-3 text-sm text-forest shadow-sm border border-forest/5 transition-all duration-300 hover:border-gold/50 hover:shadow-md">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold shrink-0 transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shadow-sm">
                        <IconComp size={16} />
                      </span>
                      <span className="font-medium transition-colors group-hover:text-teal">{amenity}</span>
                    </p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>

        <aside>
          <Reveal dir="right" className="sticky top-28 rounded-3xl bg-forest p-8 text-white shadow-2xl shadow-forest/30 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">From</p>
            <p className="mt-2 font-serif text-5xl">
              ₹{room.price.toLocaleString("en-IN")}
              <span className="text-base text-white/60"> / night</span>
            </p>
            <p className="mt-3 text-sm text-white/70">Includes daily organic breakfast. Taxes extra.</p>
            <Link
              href={`/enquire?room=${room.slug}`}
              className="btn-primary btn-gold mt-7 flex w-full items-center justify-center whitespace-nowrap py-4 text-center text-[0.72rem] font-bold uppercase tracking-[0.16em] shadow-xl hover:shadow-gold/25"
            >
              Enquire Now
            </Link>
            <Link
              href="/contact"
              className="mt-3.5 flex w-full items-center justify-center rounded-full border border-white/25 bg-white/5 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-forest shadow-md"
            >
              Talk to Reservations
            </Link>
          </Reveal>
        </aside>
      </section>

      <section className="bg-sand/60 py-6 my-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="You may also like" title="More Places to Rest" />
          <StackList className="mt-12 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 sm:max-lg:[&>*:nth-child(3)]:hidden">
            {related.map((item) => (
              <RoomCard key={item.slug} room={item} />
            ))}
          </StackList>
        </div>
      </section>
    </>
  );
}
