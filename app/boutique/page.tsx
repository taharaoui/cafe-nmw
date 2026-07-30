import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";
import { products } from "@/lib/data";
import BoutiqueGrid from "@/components/boutique/BoutiqueGrid";
import BoutiqueCTA from "@/components/boutique/BoutiqueCTA";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Découvrez les objets du quotidien, les coffrets cadeaux et les produits locaux de NMW.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/boutique" },
  openGraph: { title: "Boutique | NMW", description: "Des objets de maison, de café et de cadeaux soigneusement sélectionnés.", url: "https://www.nmwcafegalerie.com/boutique" },
  twitter: { title: "Boutique | NMW", description: "Des objets de maison, de café et de cadeaux soigneusement sélectionnés." },
};

export default function BoutiquePage() {
  return (
    <PageShell
      title="Une boutique qui fait la part belle aux détails."
      eyebrow="Boutique locale"
      intro="Des objets pour la maison, le café, les cadeaux et la contemplation — choisis avec la même exigence que les boissons et les fleurs."
      heroImage="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1800&q=80"
      ctaLabel="Explorer la boutique"
      ctaHref="/contact"
    >
      <SectionBlock eyebrow="Sélection" title="Des produits raffinés, utiles et durables." description="Entre bougies, céramiques, thé, café et coffrets cadeaux, chaque objet raconte une histoire de qualité et de goût.">
        <BoutiqueGrid products={products} />
      </SectionBlock>

      <SectionBlock eyebrow="Shopify" title="Une boutique prête pour l'intégration Shopify" description="La page est préparée pour accueillir une boutique Shopify intégrée d'ici peu, avec un cadre responsive pour les collections et les produits.">
        <div className="rounded-[1.5rem] border border-[#e8ddd2] bg-white/80 p-8 text-ink/80">
          <div className="mb-6 text-sm uppercase tracking-[0.35em] text-gold-dark">Intégration Shopify</div>
          <div className="rounded-[1.5rem] border border-dashed border-coffee/30 bg-[#faf6f1] p-10 text-center text-sm text-ink/70">
            <p className="mb-4 text-lg font-semibold text-coffee-dark">Boutique Shopify en place</p>
            <p>Un cadre responsive est prêt pour accueillir vos collections, votre panier et le paiement sécurisé.</p>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-coffee-dark/60">Frame Shopify placeholder</p>
          </div>
        </div>
      </SectionBlock>

      <BoutiqueCTA />
    </PageShell>
  );
}
