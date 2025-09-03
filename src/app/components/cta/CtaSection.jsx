import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import Uptitle from "@/app/components/utils/Uptitle";

export default function CtaSection() {
    return (
        <section id="cta" style={{backgroundImage: 'url(/background_epic.png)'}}
                 className="section-white container md:rounded-t-xl">

            <div className="js-cursor-cta--hover relative flex flex-col items-center justify-center shadow-sm overflow-hidden
                   py-12 md:py-16 px-6 md:px-8 xl:px-30 2xl:px-40 rounded-t-xl md:rounded-t-2xl text-center text-white size-full">

                <Uptitle className="text-white" withScrollTrigger>
                    Prêt à démarrer ?
                </Uptitle>

                <AnimText
                    useScrollTrigger
                    tag="h2"
                    className="font-figtree tracking-tight
                    text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-7xl
                    leading-[.95] font-medium mb-2 md:mb-4 xl:mb-6">
                    Lancez <span className="css-word-italic">votre</span> projet <br />
                    dès <span className="css-word-italic">aujourd&apos;hui.</span>
                </AnimText>

                <AnimParagraph
                    withScrollTrigger
                    tag="p"
                    className="container font-figtree md:text-lg font-light tracking-tight text-white md:max-w-3xl mb-5 md:mb-6 xl:mb-10"
                >
                    C'est le moment de surprendre vos visiteurs avec une vitrine repensée.
                </AnimParagraph>

                <div className="flex max-md:flex-col max-md:items-center size-fit gap-4">
                    <CTABase
                        variant="white"
                        to="/contact"
                        text="Lancer mon projet"
                    />

                    <CTABase
                        variant="black"
                        to="mailto:pro@simontessard.fr"
                        text="Me contacter par email"
                    />
                </div>
            </div>
        </section>
    );
}
