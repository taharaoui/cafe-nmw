"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeIntroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6 }}
      className="rounded-[2rem] border border-[#e7ddd0] bg-[#f3eee7] p-8 md:p-12"
    >
      <p className="eyebrow text-coffee-dark">Rituel & communauté</p>
      <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-coffee-dark md:text-4xl">
            Du matin au soir, NMW tient la place d'un refuge créatif.
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/70">
            Le café devient un espace de travail, de rencontre, de dégustation, d'exposition et de plaisir.
          </p>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-coffee px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-coffee-dark">
          Planifier une visite
        </Link>
      </div>
    </motion.div>
  );
}
