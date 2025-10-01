import AnimText from "@/app/common/utils/AnimText";
import Uptitle from "@/app/common/utils/Uptitle";
import Calendar from "@/app/contact/Calendar";
import HomeLogo from "@/app/common/ui/HomeLogo";
import Annotation from "@/app/contact/Annotation";

export default function ContactSection() {

    return (
        <section className="bg-white-primary flex flex-col items-center min-h-screen
        pt-24 md:pt-26 lg:pt-28 xl:pt-30 2xl:pt-32 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <Uptitle className="text-black">
                Réserver un appel de 30 minutes
            </Uptitle>

            <AnimText tag="h1" className="css-title-section container text-black text-center max-w-4xl mb-10 md:mb-12 xl:mb-14 2xl:mb-16">
                Créons <span className="css-word-italic text-blue-primary/90">ensemble</span>
                <br className="max-md:hidden"/>
                votre <span className="css-word-italic text-blue-primary/90">projet.</span>
            </AnimText>

            <Calendar/>

            <Annotation/>
        </section>
    )
}