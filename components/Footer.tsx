import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";
import InkMotif from "./InkMotif";
import { brand, siteLinks } from "@/lib/site";

const columns = [
  {
    title: "Explorer",
    links: siteLinks.slice(0, 4),
  },
  {
    title: "Visiter",
    links: siteLinks.slice(4),
  },
];

export default function Footer() {
  return (
    <footer className="bg-coffee-dark pt-20 text-cream/80">
      <div className="container-nmw">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-xl text-cream">
              {brand.name}
            </span>
            <InkMotif className="mt-4 text-gold/70" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {brand.slogan} — un espace où le café, l&apos;art, les fleurs et la créativité se rencontrent avec élégance.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                aria-label="NMW sur Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="NMW sur Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:bonjour@nmwcafegalerie.com"
                aria-label="Écrire à NMW par courriel"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm uppercase tracking-widest2 text-gold-light">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest2 text-gold-light">
              Infolettre
            </h3>
            <p className="mt-5 text-sm">
              Nouveautés, artistes en vedette et ateliers, une fois par mois.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Votre courriel"
                aria-label="Adresse courriel pour l'infolettre"
                className="w-full rounded-full border border-cream/20 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-coffee-dark transition-colors hover:bg-gold-light"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 py-8 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. Tous droits réservés.</p>
          <p>{brand.address} · {brand.hours}</p>
        </div>
      </div>
    </footer>
  );
}
