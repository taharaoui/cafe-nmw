"use client";

import { motion } from "framer-motion";

export default function ContactInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5 }}
      className="rounded-[1.5rem] border border-[#e9ddd0] bg-white/80 p-8"
    >
      <h3 className="text-xl text-coffee-dark">Adresse & horaires</h3>
      <p className="mt-4 text-sm leading-8 text-ink/70">
        142 Rue Saint-Paul, Montréal, QC
        <br />
        Tous les jours · 7h30–18h00
      </p>
      <div className="mt-8 space-y-3 text-sm text-ink/70">
        <p>Parking disponible à proximité</p>
        <p>Accessible aux fauteuils roulants</p>
        <p>Wi-Fi gratuit</p>
      </div>
    </motion.div>
  );
}
