"use client";

import { motion } from "framer-motion";
import type { events as eventsType } from "@/lib/data";

export default function Timeline({ items }: { items: typeof eventsType }) {
  return (
    <div className="relative mt-14">
      <div className="absolute left-[3.25rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-coffee/15 md:block" />
      <div className="flex flex-col gap-8">
        {items.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="relative flex flex-col gap-4 rounded-2xl border border-coffee/10 bg-white/70 p-6 shadow-card md:flex-row md:items-center md:gap-8 md:pl-24"
          >
            <div className="hidden h-3 w-3 shrink-0 rounded-full border-2 border-gold bg-cream md:absolute md:left-[calc(3.25rem-5px)] md:block" />
            <div className="font-display text-2xl text-gold-dark md:w-20 md:shrink-0">
              {event.date}
            </div>
            <div className="flex-1">
              <span className="text-xs font-medium uppercase tracking-wide text-clay-dark">
                {event.type}
              </span>
              <h3 className="mt-1 font-display text-xl text-coffee-dark">
                {event.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
