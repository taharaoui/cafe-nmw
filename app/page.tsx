import PageShell from "@/components/layout/PageShell";
import HomePreviewSection from "@/components/home/HomePreviewSection";
import SectionBlock from "@/components/ui/SectionBlock";
import HomeIntroCard from "@/components/home/HomeIntroCard";

const previews = [
  {
    eyebrow: "Café de spécialité",
    title: "Une expérience café pensée comme un rituel",
    description: "Des grains soigneusement sélectionnés, une préparation raffinée et une ambiance de calme au cœur du quartier.",
    href: "/cafe",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    accent: "from-[#111111]/10 to-transparent",
  },
  {
    eyebrow: "Bar à fleurs",
    title: "Composer un bouquet au rythme des saisons",
    description: "Des fleurs fraîches, une sélection éditoriale et un service à la hauteur du moment.",
    href: "/flower-bar",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1200&q=80",
    accent: "from-[#444444]/10 to-transparent",
  },
  {
    eyebrow: "Boutique locale",
    title: "Des objets choisis comme des rencontres",
    description: "Céramiques, bougies, thés et objets du quotidien conçus pour le plaisir de tenir.",
    href: "/boutique",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80",
    accent: "from-[#6E5448]/20 to-transparent",
  },
];

export default function Home() {
  return (
    <PageShell
      title="Un lieu où le café, l’art et la vie se croisent."
      eyebrow="NMW Café Galerie Boutique"
      intro="Une destination élégante et chaleureuse pour le café de spécialité, les bouquets, la boutique et le plaisir d’une pause à Montréal."
      heroImage="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1800&q=80"
      ctaLabel="Découvrir la maison"
      ctaHref="/about"
    >
      <SectionBlock
        eyebrow="L'univers NMW"
        title="Chaque expérience est une invitation à s'arrêter, regarder et revenir."
        description="Le site s'ouvre désormais comme un monde cohérent, où chaque page accueille une facette distincte de la marque."
      >
        <div className="grid gap-8">
          {previews.map((item) => (
            <HomePreviewSection key={item.href} {...item} />
          ))}
        </div>
      </SectionBlock>

      <section className="container-nmw pb-20 md:pb-24">
        <HomeIntroCard />
      </section>
    </PageShell>
  );
}
