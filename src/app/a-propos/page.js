import TestimonialsSection from "@/app/home/testimonials/TestimonialsSection";
import BrandList from "@/app/common/dividers/BrandsList";
import AboutSection from "@/app/a-propos/AboutSection";
import FAQSection from "@/app/common/faq/FaqSection";
import brands from '@/data/brands.json';
import ImageGallery from "@/app/a-propos/ImageGallery";

export const metadata = {
    title: "À propos",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
        pt-26 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">
            <AboutSection/>
            <ImageGallery/>
            <TestimonialsSection/>
            <BrandList brands={brands} direction="right"/>
            <FAQSection/>
        </main>
    );
};