import type { Metadata } from "next";
import { IMG } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaNewsletter } from "@/components/CtaNewsletter";
import { contactContent as content } from "@/lib/data";

const page = content.contact;

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Suryavana Hotel & Resort",
  description: "Find clear answers about reservations, check-in, airport transfers, dining, and wellness rituals at Suryavana Hotel & Resort.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about your coastal forest sanctuary escape."
        image={IMG.poolResort}
        crumbs={[{ label: "FAQ" }]}
      />

      {/* Styled 2-Color FAQ Section */}
      <FaqSection
        eyebrow={page.faq.eyebrow}
        heading={page.faq.heading}
        subtitle={page.faq.subtitle}
        items={page.faq.items}
      />

      {/* Suryavana Circle Newsletter CTA Section */}
      <CtaNewsletter />
    </>
  );
}
