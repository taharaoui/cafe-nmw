# NMW Café Galerie Boutique

Site vitrine premium pour NMW Café Galerie Boutique — café de spécialité,
bar à fleurs, galerie d'art et boutique locale, réunis en un seul lieu.

## Stack

- Next.js 15 (App Router) + TypeScript
- TailwindCSS (palette et typographie sur mesure)
- Framer Motion (animations au défilement, micro-interactions)
- Lucide React (icônes)
- next/image (images optimisées, chargement différé)

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm run start
```

## Structure

```
app/            Routes App Router, layout, metadata, sitemap, robots
components/     Composants réutilisables (Navbar, Hero, MenuCard, etc.)
lib/data.ts     Contenu du site (menu, galerie, produits, événements…)
```

## Personnalisation

- **Couleurs et typographie** : `tailwind.config.ts`
- **Contenu** (menu, produits, événements, témoignages, galerie) : `lib/data.ts`
- **Images** : remplacez les URLs Unsplash dans `lib/data.ts` et les
  composants par vos propres photos (dans `public/` ou un CDN), puis
  ajoutez le domaine dans `next.config.mjs` si nécessaire.
- **Formulaire de contact** : `components/ContactForm.tsx` simule l'envoi ;
  branchez-le sur votre API ou service d'e-mail transactionnel.
- **Carte** : l'URL Google Maps dans `components/Location.tsx` est un
  placeholder générique ; remplacez-la par l'adresse exacte du café.

## SEO

Métadonnées, OpenGraph, Twitter Card et données structurées
`CafeOrCoffeeShop` (JSON-LD) sont définies dans `app/layout.tsx`.
`app/sitemap.ts` et `app/robots.ts` génèrent le sitemap et le fichier
robots.txt.
