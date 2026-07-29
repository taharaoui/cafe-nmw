"use client";

import { motion } from "framer-motion";

export default function ContactFormCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5, delay: 0.08 }}
      className="rounded-[1.5rem] border border-[#e9ddd0] bg-[#f4eee7] p-8"
    >
      <h3 className="text-xl text-coffee-dark">Écrivez-nous</h3>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded-full border border-[#e5d9ca] bg-white px-4 py-3 text-sm outline-none" placeholder="Votre prénom" />
        <input className="w-full rounded-full border border-[#e5d9ca] bg-white px-4 py-3 text-sm outline-none" placeholder="Votre courriel" />
        <textarea className="min-h-32 w-full rounded-[1.25rem] border border-[#e5d9ca] bg-white px-4 py-3 text-sm outline-none" placeholder="Votre message" />
        <button className="rounded-full bg-coffee px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-coffee-dark">Envoyer</button>
      </form>
    </motion.div>
  );
}
