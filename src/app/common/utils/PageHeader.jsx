// app/common/components/PageHeader.jsx
import AnimText from "@/app/common/utils/AnimText";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import Uptitle from "@/app/common/utils/Uptitle";

export default function PageHeader({ uptitle, title, subtitle }) {
    return (
        <div className="page-header bg-white container py-12 w-full rounded-xl mb-10 md:mb-14 xl:mb-18">
            {uptitle && (
                <Uptitle>
                    {uptitle}
                </Uptitle>
            )}

            <AnimText tag="h1" className="css-title-section mb-4 md:mb-5 xl:mb-6">
                {title}
            </AnimText>

            {subtitle && (
                <AnimParagraph
                    tag="p"
                    className="css-subtitle-section container md:max-w-3xl">
                    {subtitle}
                </AnimParagraph>
            )}
        </div>
    );
}