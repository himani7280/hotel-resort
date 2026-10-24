"use client";

import Link from "next/link";
import { Reveal } from "./Motion";
import { miscContent as misc } from "@/lib/data";
import { ArrowRightIcon } from "@/lib/icons";

const news = misc.newsletter as {
  eyebrow?: string;
  headingBefore?: string;
  headingAccent?: string;
  headingAfter?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
};

type CtaNewsletterProps = {
  eyebrow?: string;
  headingBefore?: string;
  headingAccent?: string;
  headingAfter?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CtaNewsletter(props: CtaNewsletterProps) {
  const eyebrow = props.eyebrow ?? news.eyebrow ?? "The Suryavana Circle";
  const headingBefore = props.headingBefore ?? news.headingBefore ?? "Where the ";
  const headingAccent = props.headingAccent ?? news.headingAccent ?? "sun";
  const headingAfter = props.headingAfter ?? news.headingAfter ?? " awakens the sanctuary.";
  const text =
    props.text ??
    news.text ??
    "Join our private circle to receive seasonal forest retreat offerings, private villa invitations, and wellness journals directly to your inbox.";
  const buttonText = props.buttonText ?? news.buttonText ?? "Contact Us";
  const buttonHref = props.buttonHref ?? news.buttonHref ?? "/contact";

  return (
    <section className="relative isolate mx-auto max-w-7xl px-4 py-4 my-4 sm:px-6 lg:px-8">
      <Reveal className="rounded-3xl bg-gradient-to-r from-forest/95 via-[#0a2e21] to-forest/95 p-8 sm:p-12 border border-gold/25 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
            <h2 className="mt-2 font-serif text-2xl font-medium text-white sm:text-3xl lg:text-[2.25rem] leading-[1.25]">
              {headingBefore}
              <span className="text-gold-gradient italic inline-block pr-2.5 -mr-1.5 align-baseline">
                {headingAccent}
              </span>
              {headingAfter}
            </h2>
            <p className="mt-3 text-sm text-white/75 max-w-lg leading-relaxed">
              {text}
            </p>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <Link
              href={buttonHref}
              className="btn-primary btn-gold inline-flex items-center gap-3 whitespace-nowrap px-8 py-4 text-xs font-semibold tracking-widest uppercase shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <span>{buttonText}</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

