import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="container-nmw">
        <SectionTitle
          eyebrow="Contact"
          title="Une question, une réservation, une idée ?"
          description="Écrivez-nous — nous répondons habituellement en moins de 24 heures."
          align="center"
        />
        <div className="mx-auto mt-14 max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
