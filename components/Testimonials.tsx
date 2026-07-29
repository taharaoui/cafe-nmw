"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="bg-coffee-dark py-24 md:py-32">
      <div className="container-nmw">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ce que nos habitués en disent"
          align="center"
          light
        />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-cream/10 bg-cream/5 p-8 text-center backdrop-blur-sm md:p-12"
            >
              <div className="flex justify-center gap-1 text-gold-light">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-6 font-display text-xl italic leading-relaxed text-cream md:text-2xl">
                « {current.quote} »
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <span className="text-sm font-medium text-cream/85">
                  {current.name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Témoignage précédent"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Voir le témoignage de ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/30"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Témoignage suivant"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
