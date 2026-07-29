"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function InstagramGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
      {images.map((src, i) => (
        <motion.a
          key={src}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative aspect-square overflow-hidden rounded-xl"
        >
          <Image
            src={src}
            alt="Photo partagée sur Instagram par NMW Café Galerie Boutique"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(min-width: 768px) 16vw, 30vw"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-coffee-dark/0 transition-colors duration-300 group-hover:bg-coffee-dark/40">
            <Instagram
              size={20}
              className="text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
