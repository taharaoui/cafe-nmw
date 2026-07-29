"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type HomePreviewSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: string;
  accent?: string;
};

export default function HomePreviewSection({
  eyebrow,
  title,
  description,
  href,
  image,
  accent = "from-[#111111]/10 to-transparent",
}: HomePreviewSectionProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-[2rem] border border-[#eadfd8] bg-cream shadow-soft"
    >
      <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
        <div className={`relative min-h-[320px] bg-gradient-to-br ${accent}`}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#241916]/60 via-[#241916]/20 to-transparent" />
        </div>
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            <p className="eyebrow text-coffee-dark">{eyebrow}</p>
            <h3 className="mt-4 text-2xl text-coffee-dark">{title}</h3>
            <p className="mt-4 text-base leading-8 text-ink/70">{description}</p>
          </div>
          <Link
            href={href}
            className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-coffee-dark transition-colors hover:text-gold-dark"
          >
            <span>Explore →</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
