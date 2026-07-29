"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { gallery as galleryType } from "@/lib/data";

export default function GalleryGrid({
  items,
}: {
  items: typeof galleryType;
}) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
      {items.map((piece, i) => (
        <motion.figure
          key={piece.caption}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
          className={`group relative break-inside-avoid overflow-hidden rounded-2xl shadow-card ${
            piece.tall ? "aspect-[3/4]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={piece.src}
            alt={piece.caption}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 font-display text-sm text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {piece.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
