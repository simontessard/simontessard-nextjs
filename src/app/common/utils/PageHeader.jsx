// app/common/components/PageHeader.jsx
import AnimText from "@/app/common/utils/AnimText";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import Uptitle from "@/app/common/utils/Uptitle";
import Breadcrumbs from "@/app/common/utils/Breadcrumbs";

export default function PageHeader({ uptitle, title, subtitle, breadcrumbs }) {
    return (
        <div className="container">
            <hr className="w-full text-black/20 mb-3 md:mb-4" />

            {breadcrumbs && (
                <Breadcrumbs items={breadcrumbs} />
            )}

            <div className="bg-white py-8 md:py-12 xl:py-14 w-full rounded-xl shadow-xs mb-8 md:mb-10">

                {uptitle && (
                    <Uptitle>
                        {uptitle}
                    </Uptitle>
                )}

                <AnimText tag="h1" className="css-title-section">
                    {title}
                </AnimText>

                {subtitle && (
                    <AnimParagraph
                        tag="p"
                        className="css-subtitle-section container mt-4 md:mt-5 xl:mt-6 md:max-w-3xl">
                        {subtitle}
                    </AnimParagraph>
                )}
            </div>
        </div>
    );
}