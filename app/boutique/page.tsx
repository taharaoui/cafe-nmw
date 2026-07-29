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

      <BoutiqueCTA />
    </PageShell>
  );
}
