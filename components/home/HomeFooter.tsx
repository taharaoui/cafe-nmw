import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="border-t border-[#EAEAEA] py-[80px]">
      <div className="container-nmw flex flex-col gap-10 text-sm text-[#666666]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <span className="font-display text-base text-[#111111]">NMW Café Galerie Boutique</span>
          <nav className="flex flex-wrap gap-6">
            <Link href="#story" className="transition-colors hover:text-[#111111]">Story</Link>
            <Link href="#coffee" className="transition-colors hover:text-[#111111]">Coffee</Link>
            <Link href="#visit" className="transition-colors hover:text-[#111111]">Visit</Link>
          </nav>
        </div>
        <p className="max-w-2xl leading-7">
          A quiet, editorial landing page for NMW, rooted in calm hospitality, artistic curation and considered product design.
        </p>
        <div className="flex flex-col gap-3 border-t border-[#EAEAEA] pt-6 text-xs text-[#999999] lg:flex-row lg:justify-between">
          <span>© {new Date().getFullYear()} NMW</span>
          <span>Montreal, Canada</span>
        </div>
      </div>
    </footer>
  );
}
