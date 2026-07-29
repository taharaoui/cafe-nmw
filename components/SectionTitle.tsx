"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={`eyebrow ${align === "center" ? "justify-center before:hidden after:block after:h-px after:w-8 after:bg-gold" : ""} ${
          light ? "text-gold-light" : ""
        }`}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className={`mt-4 text-3xl leading-tight md:text-4xl lg:text-[2.75rem] font-medium ${
          light ? "text-cream" : "text-coffee-dark"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-cream/80" : "text-ink/70"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
