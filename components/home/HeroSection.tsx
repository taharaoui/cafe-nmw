"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const heroImage = "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#FAFAF8]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Atmosphère minimaliste de café et galerie NMW"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#FAFAF8]/20" aria-hidden="true" />
      </div>

      <div className="container-nmw relative z-10 flex min-h-screen items-end pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="eyebrow text-[#666666]">Coffee. Art. Objects.</p>
          <h1 className="mt-6 text-[3.2rem] leading-[0.95] tracking-[-0.03em] md:text-[4.25rem] lg:text-[4.75rem] font-display text-[#111111]">
            A destination where specialty coffee, curated design and artistic expression meet.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[#666666] md:text-lg">
            A calm, refined landing page presenting NMW as a lifestyle atelier rather than a café.
          </p>
          <Link
            href="#story"
            className="mt-12 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#111111] transition-all duration-300 hover:text-[#7A5A45]"
          >
            <span>Explore NMW</span>
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
