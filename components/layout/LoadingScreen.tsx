"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const letters = ["N", "M", "W"];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("nmw-first-load-complete") === "true") {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("nmw-first-load-complete", "true");
      setVisible(false);
    }, 1650);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#faf8f5]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,154,68,0.14),_transparent_55%)]" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-[3rem] font-semibold tracking-[0.35em] text-[#1d1d1d] sm:text-[4rem]"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={letter}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  className="font-serif"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-6 h-px bg-[#6e5448]"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7 }}
              className="mt-6 text-sm uppercase tracking-[0.4em] text-[#6e5448]"
            >
              No Matter What
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
