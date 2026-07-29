import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";
import FlowerBarFeatures from "@/components/flower-bar/FlowerBarFeatures";
import FlowerBarCTA from "@/components/flower-bar/FlowerBarCTA";

export const metadata: Metadata = {
  title: "Flower Bar",
  description: "Composez votre bouquet à NMW, avec des fleurs fraîches, saisonnières et travaillées avec élégance.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/flower-bar" },
  openGraph: { title: "Flower Bar | NMW", description: "Composez votre bouquet à NMW.", url: "https://www.nmwcafegalerie.com/flower-bar" },
  twitter: { title: "Flower Bar | NMW", description: "Composez votre bouquet à NMW." },
};

export default function FlowerBarPage() {
  return (
    <PageShell
      title="Construire un bouquet, c'est créer un souvenir."
      eyebrow="Flower Bar"
      intro="Des fleurs fraîches, choisies à la main, mises en scène comme un bouquet de saison ou un cadeau d'exception."
      heroImage="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1800&q=80"
      ctaLabel="Réserver un bouquet"
      ctaHref="/contact"
    >
      <SectionBlock eyebrow="Pratique & poétique" title="Créer son bouquet, au rythme des saisons." description="Le bar à fleurs propose des compositions fraîches, élégantes et conviviales, pour la maison, le bureau ou un moment de partage.">
        <FlowerBarFeatures />
      </SectionBlock>

      <FlowerBarCTA />
    </PageShell>
  );
}
