import Calendar from "@/app/contact/Calendar";
import Annotation from "@/app/contact/Annotation";
import PageHeader from "@/app/common/utils/PageHeader";

export default function ContactSection() {

    return (
        <section className="bg-white-primary flex flex-col items-center min-h-screen
        pt-20 md:pt-25 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <PageHeader
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "Réserver un appel", href: "/contact" }
                ]}
                uptitle="Réserver un appel de 30 minutes"
                title={<>Créons <span className="css-word-italic text-blue-primary/90">ensemble</span>
                    <br className="max-md:hidden"/>
                    votre <span className="css-word-italic text-blue-primary/90">projet.</span></>}
            />

            <Calendar/>
            <Annotation/>
        </section>
    )
}