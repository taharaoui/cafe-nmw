import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/lib/data";

export default function Experiences() {
  return (
    <section id="experiences" className="bg-clay/10 py-24 md:py-32">
      <div className="container-nmw">
        <SectionTitle
          eyebrow="Nos expériences"
          title="Six façons de vivre NMW"
          description="Chaque visite peut être différente : un café rapide, un après-midi en galerie, un bouquet composé à la main."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, i) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
