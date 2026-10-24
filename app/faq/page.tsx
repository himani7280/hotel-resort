import type { Metadata } from "next";
import { IMG, heroVariants, faqVariant } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaNewsletter } from "@/components/CtaNewsletter";

// Pull page-level data from sections.Hero.variants and sections.Faq.variants
const faqHero = heroVariants.HotelResortFaqHero1;

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Suryavana Hotel & Resort",
  description: "Find clear answers about reservations, check-in, airport transfers, dining, and wellness rituals at Suryavana Hotel & Resort.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title={faqHero.title}
        subtitle={faqHero.subtitle}
        image={IMG.poolResort}
        crumbs={[{ label: "FAQ" }]}
      />

      {/* FAQ Section — data from sections.Faq.variants.HotelResortFaq1 */}
      <FaqSection
        eyebrow={faqVariant.eyebrow}
        heading={faqVariant.heading}
        subtitle={faqVariant.subtitle}
        items={faqVariant.items}
      />

      {/* CTA — data from sections.Cta.variants.HotelResortCta1 */}
      <CtaNewsletter />
    </>
  );
}
