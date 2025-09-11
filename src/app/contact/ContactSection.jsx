import AnimText from "@/app/components/utils/AnimText";
import Uptitle from "@/app/components/utils/Uptitle";
import Calendar from "@/app/contact/Calendar";
import HomeLogo from "@/app/components/ui/HomeLogo";
import Annotation from "@/app/contact/Annotation";

export default function ContactSection() {

    return (
        <section className="bg-black-primary flex flex-col items-center min-h-screen
        pt-10 md:pt-14 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <HomeLogo/>

            <Uptitle className="text-white">
                Réserver un appel de 30 minutes
            </Uptitle>

            <AnimText tag="h1" className="css-title-section container text-white text-center max-w-4xl mb-10 md:mb-12 xl:mb-14 2xl:mb-16">
                Créons <span className="css-word-italic">ensemble</span>
                <br className="max-md:hidden"/>
                votre <span className="css-word-italic">projet.</span>
            </AnimText>

            <Calendar/>

            <Annotation/>
        </section>
    )
}