"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, Palette, ShoppingBag } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const pillars = [
  {
    title: "Coffee",
    description:
      "Precision and warmth in every cup, presented with effortless clarity and material care.",
    href: "#coffee",
    Icon: Coffee,
  },
  {
    title: "Gallery",
    description:
      "A subtle art program where local creators and quiet installations meet the café interior.",
    href: "#gallery",
    Icon: Palette,
  },
  {
    title: "Boutique",
    description:
      "Curated objects and brewing essentials chosen for their texture, form and longevity.",
    href: "#boutique",
    Icon: ShoppingBag,
  },
];

export default function ThreePillarsSection() {
  return (
    <section className="container-nmw py-[100px] lg:py-[140px]">
      <SectionTitle
        eyebrow="Three pillars"
        title="Coffee, Gallery, Boutique."
        description="The three core experiences that compose the NMW universe, presented with refined restraint."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pillars.map(({ title, description, href, Icon }) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group overflow-hidden rounded-[24px] border border-[#EAEAEA] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EAEAEA] text-[#111111] transition-transform duration-300 group-hover:-translate-y-1">
              <Icon size={20} aria-hidden="true" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold leading-tight text-[#111111]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#666666]">{description}</p>
            <Link
              href={href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#111111] transition-all duration-300 hover:text-[#7A5A45]"
            >
              <span>Discover</span>
              <span aria-hidden="true">→</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
