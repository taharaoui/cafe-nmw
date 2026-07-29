"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeVisitSection() {
  return (
    <section className="container-nmw pb-24 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-[#e8ddd2] bg-[#f7f2ea] p-8 md:p-12"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-gold-dark">Visit</p>
            <h2 className="mt-4 text-3xl leading-tight text-coffee-dark sm:text-4xl">
              Come as you are, stay for the ritual.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/70">
              Whether you are stopping by for coffee, flowers, a gallery visit or a quiet hour with a book, the house is designed to welcome you slowly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-coffee px-6 py-3 text-sm font-medium text-cream transition hover:bg-coffee-dark">
              Plan Your Visit
            </Link>
            <Link href="/menu" className="rounded-full border border-[#d8c8b5] px-6 py-3 text-sm font-medium text-coffee-dark transition hover:bg-white">
              View the Menu
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
