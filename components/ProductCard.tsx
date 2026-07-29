"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-clay/10 shadow-card">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-clay-dark">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-lg text-coffee-dark">
            {product.name}
          </h3>
        </div>
        <span className="whitespace-nowrap font-display text-base text-gold-dark">
          {product.price}
        </span>
      </div>
    </motion.div>
  );
}
