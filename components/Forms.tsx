"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { Room } from "@/lib/data";
import { contactContent as content } from "@/lib/data";

const { enquiry, contact, guestOptions, redirectHref, redirectDelayMs } = content.forms;

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
      router.push(redirectHref);
    }, redirectDelayMs);
  };

  return (
    <motion.form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className={LABEL}>
        {enquiry.fields.name.label}
        <input name="name" required placeholder={enquiry.fields.name.placeholder} className={FIELD} />
      </label>
      <label className={LABEL}>
        {enquiry.fields.email.label}
        <input name="email" type="email" required placeholder={enquiry.fields.email.placeholder} className={FIELD} />
      </label>
      <label className={LABEL}>
        {enquiry.fields.phone.label}
        <input name="phone" type="tel" required placeholder={enquiry.fields.phone.placeholder} className={FIELD} />
      </label>
      <label className={LABEL}>
        {enquiry.fields.room.label}
        <select name="room" defaultValue={params.get("room") ?? ""} className={FIELD}>
          <option value="">{enquiry.fields.room.placeholder}</option>
          {rooms.map((room) => (
            <option key={room.slug} value={room.slug}>
              {room.name}
            </option>
          ))}
        </select>
      </label>
      <label className={LABEL}>
        {enquiry.fields.checkin.label}
        <input name="checkin" type="date" required defaultValue={params.get("checkin") ?? ""} className={FIELD} />
      </label>
      <label className={LABEL}>
        {enquiry.fields.checkout.label}
        <input name="checkout" type="date" required defaultValue={params.get("checkout") ?? ""} className={FIELD} />
      </label>
      <label className={LABEL}>
        {enquiry.fields.guests.label}
        <select name="guests" defaultValue={params.get("guests") ?? guestOptions.defaultCount} className={FIELD}>
          {guestOptions.counts.map((count) => (
            <option key={count} value={count}>
              {count} {count === 1 ? guestOptions.singular : guestOptions.plural}
            </option>
          ))}
        </select>
      </label>
      <label className={LABEL}>
        {enquiry.fields.occasion.label}
        <select name="occasion" className={FIELD}>
          {enquiry.fields.occasion.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        {enquiry.fields.message.label}
        <textarea name="message" rows={4} placeholder={enquiry.fields.message.placeholder} className={FIELD} />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary btn-gold rounded-xl! py-4! sm:col-span-2 disabled:opacity-75 transition-all"
      >
        {submitting ? enquiry.submitting : enquiry.submit}
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
      router.push(redirectHref);
    }, redirectDelayMs);
  };

  return (
    <motion.form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className={LABEL}>
        {contact.fields.name.label}
        <input required placeholder={contact.fields.name.placeholder} className={FIELD} />
      </label>
      <label className={LABEL}>
        {contact.fields.email.label}
        <input type="email" required placeholder={contact.fields.email.placeholder} className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        {contact.fields.subject.label}
        <input required placeholder={contact.fields.subject.placeholder} className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        {contact.fields.message.label}
        <textarea required rows={5} placeholder={contact.fields.message.placeholder} className={FIELD} />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary btn-gold rounded-xl! py-4! sm:col-span-2 disabled:opacity-75 transition-all"
      >
        {submitting ? contact.submitting : contact.submit}
      </button>
    </motion.form>
  );
}
