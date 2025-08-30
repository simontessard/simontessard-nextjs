import "./globals.css";
import LenisProvider from "@/app/components/utils/LenisProvider";

const siteUrl = "https://www.simontessard.fr";

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Simon Tessard - Création de sites web",
        template: "%s | Simon Tessard",
    },
    description:
        "Freelance spécialisé en développement web, création de sites performants, design et optimisation SEO.",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: "Simon Tessard - Création de sites web",
        description: "Freelance spécialisé en développement web, création de sites performants, design et optimisation SEO.",
        images: [{ url: "/og.jpg", width: 1200, height: 630 }],
        locale: "fr_FR",
    },
    robots: { index: true, follow: true },
    twitter: { card: "summary_large_image", images: ["/og.jpg"] },
    viewport: "width=device-width, initial-scale=1",
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
