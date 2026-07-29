"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type PageShellProps = {
  title: string;
  eyebrow: string;
  intro: string;
  children: React.ReactNode;
  heroImage?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PageShell({
  title,
  eyebrow,
  intro,
  children,
  heroImage,
  ctaLabel = "Explorer",
  ctaHref = "/contact",
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#f1f1eb] pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(17,17,17,0.08),_transparent_45%)]" />
          {heroImage ? (
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#241916]/80 via-[#241916]/45 to-[#241916]/20" />
            </div>
          ) : null}
          <div className="container-nmw relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="eyebrow text-coffee-dark"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mt-6 max-w-3xl text-4xl leading-[0.95] text-coffee-dark sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-coffee-dark/80"
            >
              {intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24 }}
              className="mt-8"
            >
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-3 rounded-full border border-coffee/15 bg-cream/90 px-6 py-3 text-sm font-medium text-coffee-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <span>{ctaLabel}</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
