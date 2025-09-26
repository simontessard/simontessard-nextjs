import AnimText from "@/app/common/utils/AnimText";
import CTABase from "@/app/common/ui/CTABase";
import Image from "next/image";

export default function Citation() {
    return (
        <section
            id="separator"
            className="relative bg-gradient-primary py-20 md:py-24 xl:py-36 overflow-hidden">

            <Image width={1000} height={1000} src="/logo.png" alt="Logo Simon TESSARD"
                   className="absolute top-0 left-0 right-0 bottom-0 m-auto size-100 md:size-135 xl:size-175 opacity-2.5 object-contain"/>

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
                    text="Réserver un appel"/>
            </div>


        </section>
    );
}
