"use client";

import { motion } from "framer-motion";

export default function HomeStorySection() {
  return (
    <section className="container-nmw py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-[#e8ddd2] bg-white/80 p-8 md:p-10"
        >
          <p className="eyebrow text-coffee-dark">The Story</p>
          <h2 className="mt-6 text-3xl leading-tight text-coffee-dark sm:text-4xl">
            A grandmother. A mother. A granddaughter.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink/70">
            The story of NMW begins in a family tradition of care, patience and generosity. What started as a ritual around coffee has become a home for beauty, conversation and belonging.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, delay: 0.06 }}
          className="overflow-hidden rounded-[2rem] border border-[#e8ddd2] bg-[#f4efe7]"
        >
          <div className="grid min-h-[320px] md:grid-cols-[1fr_0.75fr]">
            <div className="bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1200&q=80)" }} />
            <div className="flex items-end p-8 md:p-10">
              <p className="text-sm leading-8 text-ink/70">
                “No Matter What” is the promise that there will always be a place where people feel welcomed, find comfort and slow down.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
