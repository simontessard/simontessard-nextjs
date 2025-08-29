// app/not-found.jsx
import AnimText from "@/app/components/utils/AnimText";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import CTABase from "@/app/components/ui/CTABase";
import HomeLogo from "@/app/components/utils/HomeLogo";

export default function Custom404 () {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black-primary text-white">

            <HomeLogo/>

            <AnimText tag="h1" className="css-title-section mb-2 md:mb-4">
                404 <br/>
                Page <span className="css-word-italic">non</span> trouvée.
            </AnimText>

            <AnimParagraph tag="p" className="css-subtitle-section mb-6 md:mb-8 xl:mb-10">
                La page que vous cherchez n'existe pas.
            </AnimParagraph>

            <CTABase
                variant="white"
                to="/"
                text="Retour à l'accueil"
            />
        </div>
    );
};