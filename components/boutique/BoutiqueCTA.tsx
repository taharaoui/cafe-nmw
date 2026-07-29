"use client";

import { motion } from "framer-motion";

export default function BoutiqueCTA() {
  return (
    <section className="container-nmw pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-[#e7ddd2] bg-[#f3eee7] p-8 md:p-10"
      >
        <p className="eyebrow text-coffee-dark">Coming Soon</p>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-3xl text-coffee-dark">La boutique en ligne arrive bientôt.</h3>
            <p className="mt-4 text-base leading-8 text-ink/70">Nous préparons l'ouverture d'une expérience de shopping pensée pour les cafés, les fleurs, les produits locaux et les objets de maison.</p>
          </div>
          <a href="/contact" className="rounded-full bg-coffee px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-coffee-dark">Nous contacter</a>
        </div>
      </motion.div>
    </section>
  );
}
