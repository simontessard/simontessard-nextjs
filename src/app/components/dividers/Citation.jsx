import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";

export default function Citation() {
    return (
        <section
            id="separator"
            className="bg-gradient-primary py-20 md:py-24 xl:py-36 overflow-hidden"
        >
            <div className="container flex flex-col items-center gap-10 md:gap-14">
                <AnimText
                    useScrollTrigger
                    tag="h3"
                    className="text-white font-figtree font-medium tracking-tight text-center
                     text-xl md:text-3xl xl:text-4xl 2xl:text-5xl
                     leading-8 md:leading-10 xl:leading-13 2xl:leading-15"
                >
                    « Je collabore seulement avec des entreprises
                    qui veulent <span className="css-word-italic"> créer </span> des expériences web
                    <span className="css-word-italic"> mémorables.</span> »
                </AnimText>

                <CTABase
                    withScrollTrigger
                    variant="white"
                    to="/contact"
                    text="Lancer mon projet"/>
            </div>


        </section>
    );
}
