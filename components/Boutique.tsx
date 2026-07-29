import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "@/lib/data";

export default function Boutique() {
  return (
    <section id="boutique" className="bg-clay/10 py-24 md:py-32">
      <div className="container-nmw">
        <SectionTitle
          eyebrow="La boutique"
          title="Des objets choisis avec soin, faits localement"
          description="Céramique, bougies, cafés en grains et papeterie — chaque pièce raconte une histoire d'artisans d'ici."
        />

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
