"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Flower2,
  Palette,
  ShoppingBag,
  Salad,
  CakeSlice,
  type LucideIcon,
} from "lucide-react";
import type { Experience } from "@/lib/data";

const icons: Record<Experience["icon"], LucideIcon> = {
  coffee: Coffee,
  flower: Flower2,
  palette: Palette,
  "shopping-bag": ShoppingBag,
  salad: Salad,
  cake: CakeSlice,
};

export default function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const Icon = icons[experience.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-coffee/10 bg-white/60 p-8 shadow-card transition-shadow duration-300 hover:shadow-soft-lg"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-150" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-coffee text-cream transition-colors duration-300 group-hover:bg-gold group-hover:text-coffee-dark">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="relative mt-6 font-display text-xl text-coffee-dark">
        {experience.title}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-ink/70">
        {experience.description}
      </p>
    </motion.div>
  );
}
