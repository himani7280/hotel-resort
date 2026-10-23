"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { Room } from "@/lib/data";

const FIELD =
  "w-full rounded-xl border border-forest/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-mist/60 focus:border-gold focus:ring-2 focus:ring-gold/20 shadow-sm";
const LABEL = "block space-y-1.5 text-xs font-semibold uppercase tracking-wider text-mist";

export function EnquiryForm({ rooms }: { rooms: Room[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    // Smooth redirect to Thank You page
    setTimeout(() => {
      router.push("/thank-you");
    }, 350);
  };

  return (
    <motion.form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className={LABEL}>
        Full name
        <input name="name" required placeholder="Your name" className={FIELD} />
      </label>
      <label className={LABEL}>
        Email
        <input name="email" type="email" required placeholder="you@email.com" className={FIELD} />
      </label>
      <label className={LABEL}>
        Phone number
        <input name="phone" type="tel" required placeholder="+91 98765 43210" className={FIELD} />
      </label>
      <label className={LABEL}>
        Room type
        <select name="room" defaultValue={params.get("room") ?? ""} className={FIELD}>
          <option value="">Select a preferred sanctuary</option>
          {rooms.map((room) => (
            <option key={room.slug} value={room.slug}>
              {room.name}
            </option>
          ))}
        </select>
      </label>
      <label className={LABEL}>
        Check-in
        <input name="checkin" type="date" required defaultValue={params.get("checkin") ?? ""} className={FIELD} />
      </label>
      <label className={LABEL}>
        Check-out
        <input name="checkout" type="date" required defaultValue={params.get("checkout") ?? ""} className={FIELD} />
      </label>
      <label className={LABEL}>
        Guests
        <select name="guests" defaultValue={params.get("guests") ?? "2"} className={FIELD}>
          {[1, 2, 3, 4, 5, 6].map((count) => (
            <option key={count} value={count}>
              {count} {count === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </label>
      <label className={LABEL}>
        Occasion
        <select name="occasion" className={FIELD}>
          <option>Leisure &amp; Relaxation</option>
          <option>Honeymoon Retreat</option>
          <option>Anniversary Celebration</option>
          <option>Family Sanctuary Holiday</option>
          <option>Wellness &amp; Yoga Immersion</option>
        </select>
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        Special requests or preferences
        <textarea name="message" rows={4} placeholder="Dietary needs, airport transfer details, surprises, bed arrangements…" className={FIELD} />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary btn-gold rounded-xl! py-4! sm:col-span-2 disabled:opacity-75 transition-all"
      >
        {submitting ? "Confirming Enquiry…" : "Send Enquiry & Reserve"}
      </button>
    </motion.form>
  );
}

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    // Smooth redirect to Thank You page
    setTimeout(() => {
      router.push("/thank-you");
    }, 350);
  };

  return (
    <motion.form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className={LABEL}>
        Name
        <input required placeholder="Your full name" className={FIELD} />
      </label>
      <label className={LABEL}>
        Email
        <input type="email" required placeholder="you@email.com" className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        Subject
        <input required placeholder="Reservation inquiry, event, wellness retreat…" className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        Message
        <textarea required rows={5} placeholder="Write your message here…" className={FIELD} />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary btn-gold rounded-xl! py-4! sm:col-span-2 disabled:opacity-75 transition-all"
      >
        {submitting ? "Sending Message…" : "Send Message"}
      </button>
    </motion.form>
  );
}
