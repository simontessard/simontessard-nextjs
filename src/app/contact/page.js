import ContactSection from "@/app/contact/ContactSection";
import Footer from "@/app/components/footer/Footer";

export const metadata = {
    title: "Réserver un appel",
}

export default function Page() {
    return (
        <main>
            <ContactSection/>
            <Footer/>
        </main>
    );
}
