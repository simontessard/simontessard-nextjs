import TestimonialsSection from "@/app/home/testimonials/TestimonialsSection";
import BrandList from "@/app/common/dividers/BrandsList";
import AboutSection from "@/app/a-propos/AboutSection";
import FAQSection from "@/app/common/faq/FaqSection";
import ImageGallery from "@/app/a-propos/ImageGallery";
import PageHeader from "@/app/common/utils/PageHeader";
import brands from '@/data/brands.json';

export const metadata = {
    title: "À propos",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black pt-20 md:pt-25">

            <PageHeader
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "À propos", href: "/a-propos" },
                ]}
                uptitle="Qui suis-je ?"
                title={<>À <span className="css-word-italic text-blue-primary/90">propos.</span> </>}
                subtitle={<> Développeur web, je crée des expériences digitales uniques <br/> en alliant expertise technique et sens du détail. </>}
            />

            <AboutSection/>
            <ImageGallery/>
            <TestimonialsSection/>
            <BrandList brands={brands}/>
            <FAQSection/>
        </main>
    );
};