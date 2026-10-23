import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-forest px-5 pt-24 text-center text-white">
      <div>
        <p className="font-serif text-8xl text-gold">404</p>
        <h1 className="mt-4 font-serif text-3xl">This shore doesn&apos;t exist</h1>
        <p className="mt-3 text-white/70">The page you are looking for has drifted out to sea.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-forest">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
