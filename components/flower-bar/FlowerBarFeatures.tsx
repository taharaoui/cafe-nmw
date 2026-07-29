"use client";

import { motion } from "framer-motion";

const items = [
  ["Fleurs fraîches", "Des variétés choisies auprès de producteurs de confiance, avec une sélection raffinée."],
  ["Bouquets sur mesure", "Composez votre arrangement selon votre humeur, votre couleur ou votre événement."],
  ["Ateliers floraux", "Des sessions guidées pour apprendre le langage des fleurs et le geste de composition."],
  ["Offres de saison", "Des bouquets pensés pour l'hiver, le printemps, l'été et l'automne."],
];

const images = [
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=900&q=80",
  "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=900&q=80",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&q=80",
];

export default function FlowerBarFeatures() {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map(([title, text], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="rounded-[1.5rem] border border-[#e7ddd2] bg-white/70 p-8"
          >
            <h3 className="text-xl text-coffee-dark">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">{text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="overflow-hidden rounded-[1.5rem] border border-[#e7ddd2] bg-white/70"
          >
            <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
