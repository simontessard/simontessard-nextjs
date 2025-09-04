import HeroSection from "@/app/components/hero/HeroSection";
import AboutSection from "@/app/components/about/AboutSection";
import Citation from "@/app/components/dividers/Citation";
import ProcessSection from "@/app/components/process/ProcessSection";
import PriceSection from "@/app/components/pricing/PriceSection";
import TestimonialsSection from "@/app/components/testimonials/TestimonialsSection";
import BrandList from "@/app/components/dividers/Brands";
import FAQSection from "@/app/components/faq/FaqSection";
import CtaSection from "@/app/components/cta/CtaSection";
import ProjectsSection from "@/app/components/projects/ProjectsSection";
import CompareImageSection from "@/app/components/compare/CompareImageSection";
import CountUpSection from "@/app/components/dividers/CountUpSection";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import WhySection from "@/app/components/why/WhySection";

export default function Home() {
  return (
      <>
          <Header/>
          <main>
              <HeroSection/>
              <CompareImageSection/>
              <AboutSection/>
              <CountUpSection/>
              <ProjectsSection/>
              <WhySection/>
              <PriceSection/>
              <Citation/>
              <ProcessSection/>
              <BrandList/>
              <TestimonialsSection/>
              <FAQSection/>
              <CtaSection/>
          </main>
          <Footer/>
      </>
  );
}
