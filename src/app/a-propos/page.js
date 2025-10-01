import TestimonialsSection from "@/app/home/testimonials/TestimonialsSection";
import BrandList from "@/app/common/dividers/BrandsList";
import AboutSection from "@/app/a-propos/AboutSection";
import FAQSection from "@/app/common/faq/FaqSection";
import brands from '@/data/brands.json';
import ImageGallery from "@/app/a-propos/ImageGallery";
import PageHeader from "@/app/common/utils/PageHeader";

export const metadata = {
    title: "À propos",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
        pt-24 md:pt-26 lg:pt-28 xl:pt-30 2xl:pt-32 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <PageHeader
                uptitle="Qui suis-je ?"
                title={<>À <span className="css-word-italic text-blue-primary/90">propos.</span></>}
            />

            <AboutSection/>
            <ImageGallery/>
            <TestimonialsSection/>
            <BrandList brands={brands} direction="right"/>
            <FAQSection/>
        </main>
    );
};