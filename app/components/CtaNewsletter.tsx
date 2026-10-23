"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Reveal } from "./Motion";

export function CtaNewsletter() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      router.push("/thank-you");
    }, 350);
  };

  return (
    <section className="relative isolate mx-auto max-w-7xl px-4 py-4 my-4 sm:px-6 lg:px-8">
      <Reveal className="rounded-3xl bg-gradient-to-r from-forest/95 via-[#0a2e21] to-forest/95 p-8 sm:p-12 border border-gold/25 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Suryavana Circle</span>
            <h2 className="mt-2 font-serif text-2xl font-medium text-white sm:text-3xl lg:text-[2.25rem]">
              Where the <span className="text-gold-gradient italic">sun</span> awakens the sanctuary.
            </h2>
            <p className="mt-3 text-sm text-white/75 max-w-lg leading-relaxed">
              Join our private circle to receive seasonal forest retreat offerings, private villa invitations, and wellness journals directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary btn-gold whitespace-nowrap px-8 py-4 text-xs tracking-widest shadow-lg"
            >
              {loading ? "JOINING..." : "SUBSCRIBE"}
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
