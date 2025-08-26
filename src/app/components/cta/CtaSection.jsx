import CustomCursor from "@/app/components/cta/CustomCursor";
import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";

export default function CtaSection() {
    return (
        <section id="cta" className="section-white container">
            <CustomCursor />

            <div className="js-cursor-cta--hover relative flex flex-col items-center justify-center bg-white shadow-sm overflow-hidden
                   py-14 md:py-16 px-6 md:px-8 xl:px-30 2xl:px-40 rounded-t-xl md:rounded-t-2xl
                   text-center text-black size-full"
            >
                <Uptitle withScrollTrigger>
                    Commencez maintenant
                </Uptitle>

                <AnimText
                    useScrollTrigger
                    tag="h2"
                    className="font-figtree tracking-tight
                    text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-7xl
                    leading-[.95] font-semibold mb-5 md:mb-6 xl:mb-10">
                    Lancez <span className="css-word-italic">votre</span> projet <br />
                    dès <span className="css-word-italic">aujourd&apos;hui.</span>
                </AnimText>

                <CTABase
                    withScrollTrigger
                    variant="black"
                    to="mailto:pro@simontessard.fr"
                    text="Prendre contact"
                    customClass="max-md:mx-auto"
                />
            </div>
        </section>
    );
}
