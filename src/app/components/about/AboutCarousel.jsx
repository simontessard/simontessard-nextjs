"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

export default function AboutCarousel() {
    const slides = [
        { src: "/simon.jpg", alt: "Portrait de Simon" },
        { src: "/main.jpg", alt: "Main sur un clavier d'ordinateur" },
    ]

    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={slides.length > 1}
            autoplay={{ delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={800}
            slidesPerView={1}
            className="w-full lg:w-1/2 h-full rounded-xl"
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <a
                        href="https://www.linkedin.com/in/simon-tessard-138733198/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex aspect-square size-full"
                    >
                        <img
                            className="absolute top-0 left-0 size-full object-cover object-[55%_70%] rounded-xl"
                            alt={slide.alt}
                            src={slide.src}
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
