"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import InkMotif from "./InkMotif";

const blocks = [
  {
    eyebrow: "Le café",
    title: "Un café de spécialité, pensé comme un rituel",
    text: "Nos grains sont sélectionnés auprès de torréfacteurs indépendants et préparés avec soin, tasse après tasse. Ici, le café n'est pas une simple boisson : c'est le point de départ d'une pause qui prend son temps.",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1000&q=80",
    alt: "Barista préparant un café de spécialité",
  },
  {
    eyebrow: "Les fleurs & l'art",
    title: "Un bar à fleurs et une galerie vivante",
    text: "Au comptoir, composez votre bouquet avec des fleurs fraîches choisies chaque semaine. Sur les murs, une galerie change au fil des saisons pour donner une vitrine aux artistes d'ici — peinture, céramique, photographie.",
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1000&q=80",
    alt: "Bouquet de fleurs fraîches sur un comptoir en bois",
  },
  {
    eyebrow: "La boutique & la communauté",
    title: "Une boutique locale, un lieu de rencontre",
    text: "Bougies, céramiques, papeterie, cafés en grains à emporter : chaque objet est choisi pour raconter une histoire locale. NMW est avant tout un lieu de rencontre, où la créativité se partage autour d'un café.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1000&q=80",
    alt: "Objets artisanaux exposés dans la boutique",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="container-nmw">
        <div className="max-w-2xl">
          <span className="eyebrow">Notre concept</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-coffee-dark md:text-4xl lg:text-[2.75rem]">
            Café, art, fleurs et créativité — sous un même toit
          </h2>
          <InkMotif className="mt-6" />
        </div>

        <div className="mt-16 flex flex-col gap-20 md:mt-20 md:gap-28">
          {blocks.map((block, i) => (
            <div
              key={block.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft-lg"
              >
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 90vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <span className="eyebrow">{block.eyebrow}</span>
                <h3 className="mt-4 font-display text-2xl leading-snug text-coffee-dark md:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                  {block.text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
