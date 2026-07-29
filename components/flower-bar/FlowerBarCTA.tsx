"use client";

import { motion } from "framer-motion";

export default function FlowerBarCTA() {
  return (
    <section className="container-nmw pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-[#e7ddd2] bg-[#f3eee7] p-8 md:p-10"
      >
        <p className="eyebrow text-coffee-dark">Bouquets personnalisés</p>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-3xl text-coffee-dark">Chaque bouquet est confectionné selon votre style et vos préférences.</h3>
            <p className="mt-4 text-base leading-8 text-ink/70">Pour des bouquets sur mesure, contactez-nous ou passez directement au café.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/contact" className="rounded-full bg-coffee px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-coffee-dark">Nous contacter</a>
            <a href="/contact" className="rounded-full border border-coffee/20 px-6 py-3 text-sm font-medium text-coffee-dark transition-colors hover:bg-white">Visiter le café</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
