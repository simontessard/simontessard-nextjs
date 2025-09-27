import Image from "next/image";

export default function ImageGallery() {
    const images = [
        {
            src: "/about/clavier.jpg",
            alt: "Clavier sur bureau de travail"
        },
        {
            src: "/about/screen-teasing.jpg",
            alt: "Écran avec interface en développement"
        },
        {
            src: "/about/clavier-souris.jpg",
            alt: "Setup clavier et souris"
        },
        {
            src: "/about/main_2.jpg",
            alt: "Main travaillant sur ordinateur"
        }
    ];

    return (
        <section className="container grid grid-cols-2 gap-5 md:gap-8 py-8 md:py-12">
            {images.map((image, index) => (
                <Image
                    key={index}
                    width={500}
                    height={500}
                    className="size-full object-cover h-40 md:h-100 rounded-xl"
                    src={image.src}
                    alt={image.alt}
                />
            ))}
        </section>
    );
}