import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { siteMetadata, jsonLd } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = siteMetadata.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMetadata.title,
    template: "%s | NMW Café Galerie Boutique",
  },
  description: siteMetadata.description,
  keywords: [
    "café de spécialité",
    "bar à fleurs Montréal",
    "boutique locale",
    "cafés premium",
    "NMW café",
  ],
  authors: [{ name: "NMW Café Galerie Boutique" }],
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: siteUrl,
    siteName: "NMW Café Galerie Boutique",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [{ url: siteMetadata.image, width: 1200, height: 630, alt: "NMW Café Galerie Boutique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.image],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
