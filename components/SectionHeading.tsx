import { Reveal, WordReveal } from "./Motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  description?: string;
  center?: boolean;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, text, description, center = false, light = false }: SectionHeadingProps) {
  const bodyText = text ?? description;
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`mb-4 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] ${
          light ? "text-gold" : "text-teal"
        }`}
      >
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
        {eyebrow}
        {center && <span className="h-px w-8 bg-gold" aria-hidden="true" />}
      </p>
      <h2 className={`font-serif text-2xl font-medium leading-[1.2] sm:text-3xl lg:text-[2.25rem] ${light ? "text-white" : "text-forest"}`}>
        <WordReveal text={title} />
      </h2>
      {bodyText && <p className={`mt-5 text-base leading-relaxed ${light ? "text-white/75" : "text-mist"}`}>{bodyText}</p>}
    </Reveal>
  );
}
