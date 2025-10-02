import HeroSection from "@/app/home/hero/HeroSection";
import AboutSection from "@/app/home/about/AboutSection";
import Citation from "@/app/common/dividers/Citation";
import TestimonialsSection from "@/app/home/testimonials/TestimonialsSection";
import BrandList from "@/app/common/dividers/BrandsList";
import FAQSection from "@/app/common/faq/FaqSection";
import ProjectsSection from "@/app/home/projects/ProjectsSection";
import CompareImageSection from "@/app/home/compare/CompareImageSection";
import CountUpSection from "@/app/common/dividers/CountUpSection";
import WhySection from "@/app/home/why/WhySection";
import technos from '@/data/technos.json';

export const metadata = {
    title: "Simon Tessard | Création de sites web",
    description: "Développeur web freelance, expert en création de sites performants, design moderne et SEO pour maximiser votre visibilité en ligne.",
    alternates: {
        canonical: "https://simontessard.fr/",
    },
};

export default function Home() {
  return (
      <>
          <main>
              <HeroSection/>
              <CompareImageSection/>
              <Citation/>
              <AboutSection/>
              <CountUpSection/>
              <ProjectsSection/>
              <WhySection/>
              <TestimonialsSection/>
              <BrandList brands={technos} title="Technologies utilisées" />
              <FAQSection/>
          </main>
      </>
  );
}
