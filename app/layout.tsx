import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { seo, brand, contact } from "@/data/site-content";

/* ---- Fonts (next/font → CSS variables wired into tailwind.config.ts) ---- */
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ---- SEO metadata (content lives in data/site-content.ts → seo) ---- */
export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: brand.name,
  keywords: [
    "life insurance",
    "term life",
    "whole life",
    "indexed universal life",
    "final expense",
    "mortgage protection",
    "legacy planning",
    "insurance agency",
    "insurance careers",
  ],
  alternates: { canonical: seo.siteUrl },
  icons: { icon: brand.logo.src, apple: brand.logo.src },
  openGraph: {
    type: "website",
    url: seo.siteUrl,
    title: seo.title,
    description: seo.description,
    siteName: brand.name,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: brand.logo.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

/* ---- JSON-LD structured data for an InsuranceAgency ---- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: brand.name,
  slogan: brand.tagline,
  description: seo.description,
  url: seo.siteUrl,
  email: contact.email,
  image: `${seo.siteUrl}${brand.logo.src}`,
  logo: `${seo.siteUrl}${brand.logo.src}`,
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
