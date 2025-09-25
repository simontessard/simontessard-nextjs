import HeroSection from "@/app/components/hero/HeroSection";
import AboutSection from "@/app/components/about/AboutSection";
import Citation from "@/app/components/dividers/Citation";
import TestimonialsSection from "@/app/components/testimonials/TestimonialsSection";
import BrandList from "@/app/components/dividers/BrandsList";
import FAQSection from "@/app/components/faq/FaqSection";
import CtaSection from "@/app/components/cta/CtaSection";
import ProjectsSection from "@/app/components/projects/ProjectsSection";
import CompareImageSection from "@/app/components/compare/CompareImageSection";
import CountUpSection from "@/app/components/dividers/CountUpSection";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import WhySection from "@/app/components/why/WhySection";
import brands from '@/data/brands.json';
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
          <Header/>
          <main>
              <HeroSection/>
              <CompareImageSection/>
              <Citation/>
              <AboutSection/>
              <CountUpSection/>
              <ProjectsSection/>
              <WhySection/>
              <TestimonialsSection/>
              <BrandList brands={technos} direction="right"/>
              <FAQSection/>
              <CtaSection/>
          </main>
          <Footer/>
      </>
  );
}
