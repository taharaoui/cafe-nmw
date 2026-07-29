"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import MenuCard from "./MenuCard";
import Button from "./Button";
import { menu } from "@/lib/data";

export default function Menu() {
  const [active, setActive] = useState(0);

  return (
    <section id="menu" className="bg-cream py-24 md:py-32">
      <div className="container-nmw">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Le menu"
            title="Des saveurs simples, préparées avec soin"
            description="Café, matcha, cuisine fraîche et desserts maison — un aperçu de ce qui vous attend."
          />
          <Button href="#contact" variant="secondary" showIcon={false}>
            Voir le menu complet
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {menu.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                active === i
                  ? "border-coffee bg-coffee text-cream"
                  : "border-coffee/20 bg-transparent text-ink/70 hover:border-coffee/50"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {menu[active].items.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
