import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f5] px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#6e5448]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1d1d1d]">Cette page n'existe pas.</h1>
        <p className="mt-4 text-base leading-8 text-[#1d1d1d]/70">Retourner à l'accueil pour découvrir l'univers NMW.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white">Retour à l'accueil</Link>
      </div>
    </main>
  );
}
