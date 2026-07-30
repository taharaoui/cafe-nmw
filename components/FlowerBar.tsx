"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function FlowerBar() {
  return (
    <section id="fleurs" className="relative overflow-hidden bg-coffee-dark py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-organic bg-clay/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-organic-2 bg-gold/10 blur-3xl" />

      <div className="container-nmw relative grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow text-gold-light before:bg-gold-light">
            Le bar à fleurs
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl lg:text-[2.75rem]">
            Composez votre bouquet, fleur par fleur
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80">
            Chaque semaine, une sélection de fleurs fraîches arrive au bar.
            Installez-vous au comptoir, laissez-vous guider par notre
            fleuriste et repartez avec un bouquet entièrement personnel — ou
            offrez-le à quelqu&apos;un que vous aimez.
          </p>
          <div className="mt-8">
            <Button href="#contact" variant="secondary">
              Créer mon bouquet
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-organic shadow-soft-lg md:ml-auto">
            <Image
              src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=1000&q=80"
              alt="Bouquet de fleurs fraîches composé au bar à fleurs"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 -top-6 hidden aspect-square w-32 overflow-hidden rounded-organic-2 border-4 border-coffee-dark shadow-soft-lg sm:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80"
              alt="Détail de fleurs sélectionnées au bar"
              fill
              className="object-cover"
              sizes="128px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
