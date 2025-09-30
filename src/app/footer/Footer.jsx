import AnimText from "@/app/common/utils/AnimText";
import FooterMenu from "@/app/footer/FooterMenu";
import FooterContact from "@/app/footer/FooterContact";
import BackHome from "@/app/header/BackHome";
import CtaSection from "@/app/footer/cta/CtaSection";
import FooterDivider from "@/app/footer/FooterDivider";
import FooterCopyright from "@/app/footer/FooterCopyright";
import { contactLinks, navigationLinks1, navigationSecondaryLinks } from '@/data/navigation';
import FooterSocial from "@/app/footer/FooterSocial";

export default function Footer() {
    return (
        <>
            <CtaSection/>
            <footer className="js-footer bg-white">
                <div className="container pb-5 pt-16 md:pt-18 xl:pt-20 flex flex-col justify-end lg:justify-between h-full">

                    <div className="flex max-md:flex-col justify-between mb-6 md:mb-20">
                        <div className="flex flex-col max-lg:mb-10">

                            <BackHome className="mb-4"/>

                            <AnimText
                                withScrollTrigger
                                tag="p"
                                className="font-figtree font-light md:text-lg text-black mb-4 md:mb-6">
                                Toute l&apos;expertise d&apos;une agence <br />
                                accessible à des prix mini.
                            </AnimText>

                            <div className="flex flex-col gap-1">
                                <FooterSocial href="mailto:pro@simontessard.fr">
                                    pro@simontessard.fr
                                </FooterSocial>

                                <FooterSocial href="https://www.linkedin.com/in/simon-tessard-138733198/" external>
                                    LinkedIn
                                </FooterSocial>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:flex max-lg:justify-between gap-y-10 gap-4 md:gap-18 xl:gap-20 2xl:gap-24 max-md:mb-4">
                            <FooterMenu title="Présentation" links={navigationLinks1} />
                            <FooterMenu title="Projets récents" links={navigationSecondaryLinks} customClass="col-span-2" arrow />
                        </div>
                    </div>

                    <FooterDivider />

                    <div className="flex max-md:flex-col-reverse max-lg:gap-4 justify-between">
                        <FooterCopyright/>

                        <div className="flex justify-center md:justify-end items-center gap-5 md:gap-6 lg:gap-8">
                            <ul className="flex gap-3 md:gap-5 2xl:gap-6">
                                {contactLinks.map((link, index) => (
                                    <FooterContact
                                        key={`contact-${index}`}
                                        title={link.title}
                                        href={link.href}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
