"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteLinks } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container-nmw flex items-center justify-between py-4">
        <Link
          href="/"
          className={`font-display text-lg tracking-wide transition-colors ${
            scrolled ? "text-coffee-dark" : "text-cream"
          }`}
        >
          NMW <span className="text-gold">·</span> Café Galerie Boutique
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {siteLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                    scrolled ? "text-ink" : "text-cream/90"
                  } ${active ? "text-gold" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/commander"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-colors lg:inline-block ${
            scrolled
              ? "bg-coffee text-cream hover:bg-coffee-dark"
              : "bg-cream text-coffee-dark hover:bg-gold"
          }`}
        >
          Commander
        </Link>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-coffee-dark" : "text-cream"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-cream lg:hidden"
          >
            <ul className="container-nmw flex flex-col gap-1 pb-8 pt-2">
              {siteLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-coffee/10 py-3.5 font-display text-xl ${
                      pathname === link.href ? "text-gold-dark" : "text-coffee-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: siteLinks.length * 0.04 }}
                className="pt-4"
              >
                <Link
                  href="/commander"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-full bg-coffee px-6 py-3 text-sm font-medium text-cream"
                >
                  Commander
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
