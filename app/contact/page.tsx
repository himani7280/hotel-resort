import type { Metadata } from "next";
import { BRAND, IMG } from "@/lib/data";
import { ContactForm } from "@/components/Forms";
import { Reveal } from "@/components/Motion";
import { PageHero } from "@/components/PageHero";
import { Sparkles } from "@/components/BgFx";
import { MapPinIcon, PhoneIcon, MailIcon } from "@/lib/icons";
import { CtaNewsletter } from "@/components/CtaNewsletter";
import { contactContent as content } from "@/lib/data";

const page = content.contact;

export const metadata: Metadata = {
  title: page.metadata.title,
  description: page.metadata.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        image={IMG[page.hero.imageKey as keyof typeof IMG]}
        crumbs={page.hero.crumbs}
      />

      {/* Main Contact Section - Header Aligned, 12px Top/Bottom Spacing */}
      <section className="relative isolate mx-auto max-w-7xl px-4 py-4 my-3 sm:px-6 lg:px-8">
        <Sparkles />
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Column: Contact Form */}
          <Reveal dir="left" className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-xl shadow-forest/10 sm:p-10 border border-forest/10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{page.form.eyebrow}</span>
              <h2 className="mt-2 mb-4 font-serif text-2xl font-medium text-forest sm:text-3xl lg:text-[2.25rem]">{page.form.heading}</h2>
              <p className="mb-6 text-sm leading-relaxed text-mist">
                {page.form.intro}
              </p>
              <ContactForm />
            </div>
          </Reveal>

          {/* Right Column: Contact Details & Map - Equal Height Aligned */}
          <div className="flex h-full flex-col justify-between gap-6">
            <Reveal dir="right" className="rounded-3xl bg-forest p-6 text-white shadow-xl sm:p-8 border border-gold/30">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{page.concierge.eyebrow}</span>
              <h3 className="mt-1 font-serif text-2xl sm:text-3xl">{page.concierge.heading}</h3>
              
              <div className="mt-4 space-y-3.5 text-sm text-white/85">
                <div className="flex items-start gap-3 group">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shrink-0 shadow-sm mt-0.5">
                    <MapPinIcon size={16} />
                  </span>
                  <p className="mt-1 transition-colors group-hover:text-white">{BRAND.address}</p>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shrink-0 shadow-sm">
                    <PhoneIcon size={16} />
                  </span>
                  <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold font-medium">
                    {BRAND.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110 shrink-0 shadow-sm">
                    <MailIcon size={16} />
                  </span>
                  <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-gold font-medium">
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal dir="right" delay={0.2} className="flex-1 min-h-[300px] overflow-hidden rounded-3xl shadow-xl border-2 border-gold/40 shadow-forest/10">
              <iframe
                title={page.map.title}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(BRAND.address)}&z=15&output=embed`}
                className="h-full min-h-[300px] w-full border-0 contrast-[1.05] brightness-[0.98]"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>


      {/* Suryavana Circle Newsletter CTA Section */}
      <CtaNewsletter />
    </>
  );
}
