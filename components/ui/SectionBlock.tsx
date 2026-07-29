"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type SectionBlockProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionBlock({
  eyebrow,
  title,
  description,
  children,
  align = "left",
  light = false,
}: SectionBlockProps) {
  return (
    <section className="container-nmw py-20 md:py-24">
      <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55 }}
          className={`eyebrow ${light ? "text-gold-dark" : "text-coffee-dark"}`}
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, delay: 0.04 }}
          className={`mt-5 text-3xl leading-tight md:text-4xl ${light ? "text-cream" : "text-coffee-dark"}`}
        >
          {title}
        </motion.h2>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className={`mt-4 text-base leading-8 ${light ? "text-cream/80" : "text-ink/70"}`}
          >
            {description}
          </motion.p>
        ) : null}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}
