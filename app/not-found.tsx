import Link from "next/link";
import { miscContent as misc } from "@/lib/data";

const page = misc.notFound;

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-forest px-5 pt-24 text-center text-white">
      <div>
        <p className="font-serif text-8xl text-gold">{page.code}</p>
        <h1 className="mt-4 font-serif text-3xl">{page.heading}</h1>
        <p className="mt-3 text-white/70">{page.text}</p>
        <Link href={page.cta.href} className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-forest">
          {page.cta.label}
        </Link>
      </div>
    </section>
  );
}
