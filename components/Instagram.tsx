import SectionTitle from "./SectionTitle";
import InstagramGrid from "./InstagramGrid";
import Button from "./Button";
import { instagramImages } from "@/lib/data";

export default function InstagramSection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-nmw">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="@nmwcafegalerie"
            title="Suivez nos journées, un café à la fois"
          />
          <Button href="https://www.instagram.com/" variant="ghost" className="!border-coffee/30 !text-coffee-dark hover:!bg-coffee/5">
            Suivez-nous
          </Button>
        </div>
        <div className="mt-12">
          <InstagramGrid images={instagramImages} />
        </div>
      </div>
    </section>
  );
}
