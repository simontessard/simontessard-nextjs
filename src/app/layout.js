import "./globals.css";
import LenisProvider from "@/app/components/utils/LenisProvider";
import { Analytics } from "@vercel/analytics/next";
import { chivo, figtree, stix } from "@/app/fonts/fonts";

const siteUrl = "https://www.simontessard.fr";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Simon Tessard | Création de sites web",
        template: "%s | Simon Tessard",
    },
    description:
        "Développeur web freelance, expert en création de sites performants, design moderne et SEO pour maximiser votre visibilité en ligne.",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: "Simon Tessard | Création de sites web",
        description: "Freelance spécialisé en développement web, création de sites performants, design et sur-mesure.",
        images: [{ url: "/logo_rs.png", width: 600, height: 600 }],
        locale: "fr_FR",
    },
    robots: { index: true, follow: true },
    twitter: { card: "summary_large_image", images: ["/logo_rs.png"] },
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
