import SectionTitle from "./SectionTitle";
import GalleryGrid from "./GalleryGrid";
import Button from "./Button";
import { gallery } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-cream py-24 md:py-32">
      <div className="container-nmw">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="La galerie"
            title="Une exposition qui change au rythme des saisons"
            description="Peinture, céramique, photographie — un espace pour découvrir des artistes d'ici, à quelques pas de votre café."
          />
          <Button href="#evenements" variant="primary" showIcon={false}>
            Découvrir les artistes
          </Button>
        </div>

        <div className="mt-14">
          <GalleryGrid items={gallery} />
        </div>
      </div>
    </section>
  );
}
