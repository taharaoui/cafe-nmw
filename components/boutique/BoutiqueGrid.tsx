"use client";

import { motion } from "framer-motion";

export type Product = {
  name: string;
  category: string;
  price: string;
  image: string;
};

export default function BoutiqueGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <motion.article
          key={product.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className="overflow-hidden rounded-[1.5rem] border border-[#e6ddd3] bg-white/85"
        >
          <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
          <div className="p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-dark">{product.category}</p>
            <h3 className="mt-2 text-xl text-coffee-dark">{product.name}</h3>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-ink/70">Disponible en boutique</span>
              <span className="text-sm font-semibold text-coffee-dark">{product.price}</span>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
