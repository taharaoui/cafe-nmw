import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";
import { events } from "@/lib/data";

export default function Events() {
  return (
    <section id="evenements" className="bg-cream py-24 md:py-32">
      <div className="container-nmw">
        <SectionTitle
          eyebrow="Événements"
          title="Ateliers, vernissages et rendez-vous de saison"
          description="Un calendrier vivant, entre dégustations de café, ateliers floraux et soirées communautaires."
        />
        <Timeline items={events} />
      </div>
    </section>
  );
}
