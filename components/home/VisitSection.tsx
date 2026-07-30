"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const visitImage = "https://images.unsplash.com/photo-1504615755583-2916b52192ce?auto=format&fit=crop&w=1600&q=80";

export default function VisitSection() {
  return (
    <section id="visit" className="container-nmw py-[100px] lg:py-[140px]">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[28px] bg-white shadow-soft"
        >
          <div className="relative w-full overflow-hidden pt-[70%]">
            <Image
              src={visitImage}
              alt="Architectural exterior of NMW"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-md"
        >
          <SectionTitle
            eyebrow="Visit NMW"
            title="Visit NMW"
            description="A calm destination for specialty coffee, art and curated objects."
          />
          <div className="mt-10 space-y-6 text-sm leading-7 text-[#666666]">
            <div>
              <h3 className="font-semibold text-[#111111]">Address</h3>
              <p>123 Rue du Musée, Montréal, QC</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#111111]">Opening Hours</h3>
              <p>Tue–Sun 8:00 – 18:00</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#111111]">Instagram</h3>
              <Link href="https://www.instagram.com/" className="underline text-[#111111]">
                @nmw_cafegalerie
              </Link>
            </div>
          </div>
          <Link
            href="https://maps.google.com"
            className="mt-10 inline-flex items-center gap-3 border-t border-[#EAEAEA] pt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#111111]"
          >
            <span>Open in Maps</span>
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
