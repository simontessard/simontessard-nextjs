import "./globals.css";
import LenisProvider from "@/app/components/utils/LenisProvider";
import { Figtree, STIX_Two_Text, Chivo } from "next/font/google";
import {Analytics} from "@vercel/analytics/next";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
    display: "swap",
    weight: ["300", "400", "500", "700"],
});

const stix = STIX_Two_Text({
    subsets: ["latin"],
    variable: "--font-stix",
    style: ['normal', 'italic'],
    display: "swap",
    weight: ["400", "500", "700"],
});

const chivo = Chivo({
    subsets: ["latin"],
    variable: "--font-chivo",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.simontessard.fr";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Simon Tessard | Création de sites web",
        template: "%s | Simon Tessard",
    },
    description:
        "Freelance spécialisé en développement web, création de sites performants, design et optimisation SEO.",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: "Simon Tessard | Création de sites web",
        description: "Freelance spécialisé en développement web, création de sites performants, design et optimisation SEO.",
        images: [{ url: "/og.jpg", width: 1200, height: 630 }],
        locale: "fr_FR",
    },
    robots: { index: true, follow: true },
    twitter: { card: "summary_large_image", images: ["/og.jpg"] },
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
        <body className={`${figtree.variable} ${stix.variable} ${chivo.variable}`}>
            <LenisProvider>
                {children}
            </LenisProvider>
            <Analytics />
      </body>
    </html>
  );
}
