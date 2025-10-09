// app/common/components/PageHeader.jsx
import AnimText from "@/app/common/utils/AnimText";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import Uptitle from "@/app/common/utils/Uptitle";
import Breadcrumbs from "@/app/common/utils/Breadcrumbs";
import FooterDivider from "@/app/footer/FooterDivider";

export default function PageHeader({ uptitle, title, subtitle, breadcrumbs }) {
    return (
        <div className="bg-white pt-20 lg:pt-32.5 w-full rounded-b-xl md:rounded-b-3xl mb-6 md:mb-8 xl:mb-10">
            <div className="container">
                <FooterDivider useScrollTrigger={false} className="mb-3 md:mb-4"/>

                {breadcrumbs && (
                    <Breadcrumbs items={breadcrumbs} />
                )}

                <div className="pt-8 pb-10 md:pt-10 md:pb-14 xl:pb-20 w-full">

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
        </div>
    );
}