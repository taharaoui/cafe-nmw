"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // In production, wire this to an API route or form service.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-coffee/10 bg-white/70 p-12 text-center shadow-card"
      >
        <CheckCircle2 size={40} className="text-gold-dark" />
        <h3 className="mt-4 font-display text-xl text-coffee-dark">
          Message envoyé
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink/70">
          Merci de nous avoir écrit. Notre équipe vous répondra dans les
          plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 rounded-3xl border border-coffee/10 bg-white/70 p-8 shadow-card sm:grid-cols-2 md:p-10"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-coffee-dark">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Votre nom"
          className="rounded-xl border border-coffee/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-coffee-dark">
          Courriel
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="vous@exemple.com"
          className="rounded-xl border border-coffee/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="phone" className="text-sm font-medium text-coffee-dark">
          Téléphone <span className="font-normal text-ink/50">(optionnel)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="514 000-0000"
          className="rounded-xl border border-coffee/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-coffee-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Parlez-nous de votre visite, d'une réservation ou d'une question…"
          className="resize-none rounded-xl border border-coffee/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-coffee px-8 py-3.5 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coffee-dark disabled:opacity-60 sm:col-span-2 sm:w-fit"
      >
        {loading ? "Envoi en cours…" : "Envoyer le message"}
        {!loading && (
          <Send
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </button>
    </form>
  );
}
