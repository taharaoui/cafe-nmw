"use client";

import { motion } from "framer-motion";

const values = [
  ["Mission", "Créer un espace à la fois raffiné et vivant, où chaque visite offre un moment de présence."],
  ["Valeurs", "Écologie, authenticité, qualité, saisonnalité, échanges et élégance discrète."],
  ["Équipe", "Une communauté d'artistes, de fleuristes, de baristas et de créateurs autour d'une même sensibilité."],
];

export default function AboutValues() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {values.map(([title, text], index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="rounded-[1.5rem] border border-[#e9ddd0] bg-white/80 p-8"
        >
          <h3 className="text-xl text-coffee-dark">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink/70">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}
