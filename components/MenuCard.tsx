"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MenuItem } from "@/lib/data";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-4 rounded-2xl border border-coffee/10 bg-white/70 p-3 pr-5 shadow-card transition-shadow hover:shadow-soft"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="80px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-display text-base text-coffee-dark">
            {item.name}
          </h4>
          <span className="whitespace-nowrap font-display text-sm text-gold-dark">
            {item.price}
          </span>
        </div>
        <p className="mt-1 truncate text-sm text-ink/60">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
