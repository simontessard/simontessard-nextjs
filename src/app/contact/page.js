import ContactSection from "@/app/contact/ContactSection";
import Footer from "@/app/components/footer/Footer";

export const metadata = {
    title: "Réserver un appel",
    description: "Besoin d'un site web performant ? Réservez un appel découverte de 30 minutes pour discuter de votre projet.",
}

export default function Page() {
    return (
        <main>
            <ContactSection/>
            <Footer/>
        </main>
    );
}
