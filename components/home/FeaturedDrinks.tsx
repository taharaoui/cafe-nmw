"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const drinks = [
  "Espresso",
  "Latte",
  "Matcha",
  "Cold Brew",
];

export default function FeaturedDrinks() {
  return (
    <section id="drinks" className="container-nmw py-[100px] lg:py-[140px]">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <SectionTitle
            eyebrow="Featured drinks"
            title="A quiet selection."
            description="A concise editorial menu of refined, signature drinks that define the NMW coffee experience."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid gap-5 rounded-[28px] border border-[#EAEAEA] bg-white p-8"
        >
          {drinks.map((drink) => (
            <div key={drink} className="flex items-center justify-between border-b border-[#EAEAEA] pb-4 last:border-b-0 last:pb-0">
              <span className="text-base text-[#111111]">{drink}</span>
              <span className="text-sm text-[#666666]">Signature</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
