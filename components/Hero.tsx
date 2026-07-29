"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-coffee-dark"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&q=80"
          alt="Intérieur lumineux de NMW Café Galerie Boutique, avec fleurs et œuvres d'art"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/70 to-coffee-dark/30" />
        <div className="absolute inset-0 bg-coffee-dark/20" />
      </div>

      {/* ambient steam signature, echoing the espresso ritual */}
      <div className="pointer-events-none absolute bottom-[38%] left-1/2 hidden -translate-x-1/2 md:block">
        <span className="absolute h-16 w-3 rounded-full bg-cream/40 blur-md animate-steam [animation-delay:0s]" />
        <span className="absolute left-6 h-16 w-3 rounded-full bg-cream/30 blur-md animate-steam [animation-delay:1.2s]" />
        <span className="absolute -left-6 h-16 w-3 rounded-full bg-cream/30 blur-md animate-steam [animation-delay:2.1s]" />
      </div>

      <div className="container-nmw relative z-10 pt-24">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow text-gold-light before:bg-gold-light"
        >
          Montréal · Café · Galerie · Boutique
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-5xl leading-[1.08] text-cream sm:text-6xl lg:text-7xl"
        >
          NMW Café
          <br />
          <span className="italic text-gold-light">Galerie</span> Boutique
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-md text-lg leading-relaxed text-cream/85"
        >
          Un lieu où le café, l&apos;art, les fleurs et la créativité se
          rencontrent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#experiences" variant="secondary">
            Découvrir
          </Button>
          <Button href="#menu" variant="primary">
            Commander
          </Button>
          <Button href="#location" variant="ghost">
            Nous visiter
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold-light"
          />
        </div>
      </motion.div>
    </section>
  );
}
