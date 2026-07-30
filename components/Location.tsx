"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Accessibility, Car } from "lucide-react";
import SectionTitle from "./SectionTitle";

const details = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "3054A Chem. d'Oka, Sainte-Marthe-sur-le-Lac, QC J0N 1P0",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun : 7h30–16h00 · Mar : 7h30–16h00 · Mer : 7h30–16h00 · Jeu : 7h30–18h00 · Ven : 7h30–18h00 · Sam : 8h00–16h00 · Dim : 9h00–16h00",
  },
  {
    icon: Car,
    label: "Stationnement",
    value: "Stationnement public à 2 minutes de marche, rue Le Royer",
  },
  {
    icon: Accessibility,
    label: "Accessibilité",
    value: "Entrée de plain-pied, salle de bain accessible",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-clay/10 py-24 md:py-32">
      <div className="container-nmw">
        <SectionTitle
          eyebrow="Nous visiter"
          title="Au cœur du Vieux-Montréal"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl shadow-soft"
          >
            <iframe
              title="Carte — NMW Café Galerie Boutique"
              src="https://www.google.com/maps?q=Vieux-Montr%C3%A9al&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {details.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="rounded-2xl border border-coffee/10 bg-white/70 p-6 shadow-card"
              >
                <detail.icon size={20} className="text-gold-dark" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base text-coffee-dark">
                  {detail.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                  {detail.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
