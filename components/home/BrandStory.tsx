"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const storyImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80";

export default function BrandStory() {
  return (
    <section id="story" className="container-nmw py-[100px] lg:py-[140px]">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <SectionTitle
            eyebrow="Brand story"
            title="More than a coffee shop."
            description="NMW is a place built around craftsmanship, quiet moments and meaningful experiences. Every cup, every object and every artwork has been selected with intention."
          />
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-[28px] bg-white shadow-soft"
        >
          <div className="relative w-full overflow-hidden pt-[65%]">
            <Image
              src={storyImage}
              alt="Ambiance minimaliste du NMW avec mobilier et lumière naturelle"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
