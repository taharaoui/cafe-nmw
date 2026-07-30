import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";

const orderOptions = [
  {
    title: "Uber Eats",
    description: "Commandez vos cafés, boissons et douceurs à emporter directement depuis Uber Eats.",
    href: "https://www.ubereats.com/",
    tag: "Livraison & à emporter",
  },
  {
    title: "DoorDash",
    description: "Découvrez une autre option simple pour passer votre commande depuis votre application préférée.",
    href: "https://www.doordash.com/",
    tag: "Commande rapide",
  },
];

export const metadata: Metadata = {
  title: "Commander",
  description: "Choisissez un service de livraison tiers pour commander vos cafés et douceurs NMW.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/commander" },
  openGraph: { title: "Commander | NMW", description: "Commandez à emporter via Uber Eats ou DoorDash.", url: "https://www.nmwcafegalerie.com/commander" },
  twitter: { title: "Commander | NMW", description: "Commandez à emporter via Uber Eats ou DoorDash." },
};

export default function CommanderPage() {
  return (
    <PageShell
      title="Commander vos favoris, à emporter ou en livraison."
      eyebrow="Commander"
      intro="Choisissez votre service préféré pour savourer les cafés, pâtisseries et douceurs NMW depuis chez vous."
      heroImage="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1800&q=80"
      ctaLabel="Commander sur Uber Eats"
      ctaHref="https://www.ubereats.com/"
    >
      <SectionBlock eyebrow="Services tiers" title="Une expérience de commande simple et directe." description="Nous vous redirigeons vers des plateformes de livraison reconnues pour une commande fluide.">
        <div className="grid gap-6 lg:grid-cols-2">
          {orderOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.5rem] border border-[#e8ddd2] bg-white/80 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-gold-dark">{option.tag}</p>
              <h3 className="mt-4 text-2xl text-coffee-dark">{option.title}</h3>
              <p className="mt-4 text-base leading-8 text-ink/70">{option.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-coffee-dark transition-colors group-hover:text-gold-dark">
                Ouvrir le service →
              </span>
            </a>
          ))}
        </div>
      </SectionBlock>
    </PageShell>
  );
}
