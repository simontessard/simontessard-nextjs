import {Timeline} from "@/app/process/Timeline";
import Image from "next/image";

export default function TimelineDemo() {
    const data = [
        {
            index : 1,
            title: "Appel découverte",
            content: (
                <div key="content-1">
                    <p className="mb-8 font-light text-sm md:text-base lg:text-xl leading-[1.6] opacity-90">
                        Un premier échange pour faire connaissance et comprendre vos besoins de manière globale. Cet appel permet d’identifier vos attentes principales, et de vous proposer une offre commerciale adaptée.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        <Image
                            src="/about/clavier-souris.png"
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
            index : 2,
            title: "Exploration approfondie",
            content: (
                <div key="content-2">
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
            index : 3,
            title: "Conception et développement",
            content: (
                <div key="content-3">
                    <p className="mb-6 md:mb-8 font-light text-sm md:text-base lg:text-xl leading-[1.6] opacity-90">
                        Je transforme vos besoins en un plan de projet : arborescence du site, choix techniques et planning détaillé.
                        Puis je donne vie à vos idées en développant votre projet.
                        Des points réguliers permettent d'ajuster si nécessaire.
                    </p>
                    <Image
                        src="/about/clavier-2.png"
                        alt="2 mains posées sur un clavier"
                        width={1200}
                        height={1000}
                        className="h-60 md:h-80 w-full md:w-3/4 rounded-lg object-cover"
                    />
                </div>
            ),
        },
        {
            index : 4,
            title: "À vos côtés",
            content: (
                <div key="content-4">
                    <p className="mb-6 md:mb-8 font-light text-sm md:text-base lg:text-xl leading-[1.6] opacity-90">
                        Une fois votre projet finalisé et testé, je vous accompagne dans sa mise en ligne.
                        Mon engagement ne s'arrête pas là : je reste disponible pour vous former et assurer la maintenance.
                    </p>
                    <Image
                        src="/about/simon.jpg"
                        alt="Portrait Simon TESSARD"
                        width={500}
                        height={800}
                        className="aspect-square size-40 md:size-50 lg:size-60 rounded-lg object-cover"
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