"use client";

import { useEffect } from "react";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-coffee-dark py-24 md:py-32">
      <div className="container-nmw">
        <SectionTitle
          eyebrow="Avis Google"
          title="Ce que nos visiteurs disent de NMW"
          align="center"
          light
        />

        <div className="mx-auto mt-14 max-w-5xl rounded-[2rem] border border-cream/10 bg-cream/5 p-4 backdrop-blur-sm md:p-6">
          <div
            className="elfsight-app-c661c44c-1325-48fc-b78c-ffff61fb2005"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
