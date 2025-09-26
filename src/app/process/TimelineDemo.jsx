import {Timeline} from "@/app/process/Timeline";
import Image from "next/image";

export default function TimelineDemo() {
    const data = [
        {
            title: "Appel découverte",
            content: (
                <div>
                    <p className="mb-8 font-light text-sm md:text-base lg:text-xl leading-[1.6] opacity-90">
                        Un premier échange pour faire connaissance et comprendre vos besoins de manière globale. Cet appel permet d’identifier vos attentes principales, et de vous proposer une offre commerciale adaptée.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        <Image
                            src="/about/clavier-souris.jpg"
                            alt="Main gauche sur le clavier et main droite sur une souris"
                            width={400}
                            height={400}
                            className="h-50 md:h-60 xl:h-70 w-full rounded-lg object-cover"
                        />
                        <Image
                            src="/about/screen-teasing.jpg"
                            alt="Main avec ombre qui cache un écran d'ordinateur"
                            width={400}
                            height={400}
                            className="h-50 md:h-60 xl:h-70 w-full rounded-lg object-cover"
                        />
                    </div>

                </div>
            ),
        },
        {
            title: "Exploration approfondie",
            content: (
                <div>
                    <p className="mb-6 md:mb-8 font-light text-sm md:text-base lg:text-xl leading-[1.6] opacity-90">
                        Je prends le temps de comprendre vos besoins lors d'un entretien plus approfondi. Nous explorons ensemble vos objectifs et vos attentes pour définir la meilleure approche possible par rapport à vos contraintes.
                    </p>
                    <Image
                        src="/about/main_2.jpg"
                        alt="Un poste de bureau avec la main sur une souris d'ordinateur"
                        width={1200}
                        height={1000}
                        className="h-50 md:h-70 xl:h-80 w-full xl:w-2/3 rounded-lg object-cover"
                    />
                </div>
            ),
        },
        {
            title: "Conception et développement",
            content: (
                <div>
                    <p className="mb-6 md:mb-8 font-light text-sm md:text-base lg:text-xl leading-[1.6] opacity-90">
                        Je transforme vos besoins en un plan de projet : arborescence du site, choix techniques et planning détaillé.
                        Puis je donne vie à vos idées en développant votre projet.
                        Des points réguliers permettent d'ajuster si nécessaire.
                    </p>
                    <Image
                        src="/about/clavier.jpg"
                        alt="2 mains posées sur un clavier"
                        width={1200}
                        height={1000}
                        className="h-60 md:h-80 xl:h-96 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "À vos côtés",
            content: (
                <div>
                    <p className="mb-6 md:mb-8 font-light text-sm md:text-base lg:text-xl leading-[1.6] opacity-90">
                        Une fois votre projet finalisé et testé, je vous accompagne dans sa mise en ligne.
                        Mon engagement ne s'arrête pas là : je reste disponible pour vous former et assurer la maintenance.
                    </p>
                    <Image
                        src="/about/simon.jpg"
                        alt="Portrait Simon TESSARD"
                        width={500}
                        height={800}
                        className="aspect-square size-40 md:size-70 rounded-lg object-cover"
                    />
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}