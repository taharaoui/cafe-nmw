"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const previewImages = [
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    alt: "Minimal interior architecture with soft light",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    alt: "Artful gallery installation on white walls",
  },
  {
    src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80",
    alt: "Coffee preparation detail and textures",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    alt: "Lifestyle product display in a calm environment",
  },
];

export default function SpacePreview() {
  return (
    <section id="space" className="container-nmw py-[100px] lg:py-[140px]">
      <SectionTitle
        eyebrow="Space preview"
        title="A visual rhythm of the NMW space."
        description="Light, texture and quiet hospitality are shown through a series of editorial images."
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {previewImages.map((image) => (
          <motion.figure
            key={image.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[24px] bg-white shadow-soft"
          >
            <div className="relative w-full overflow-hidden pt-[120%]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
