'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackHome from "@/app/components/header/BackHome";
import Nav from "@/app/components/header/Nav";
import MenuButton from "@/app/components/header/MenuButton";
import CTABase from "@/app/components/ui/CTABase";
import Menu from "@/app/components/header/Menu";

export default function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        const el = headerRef.current;
        if (!el) return;

        // entrée du header (depuis -translate-y-[150%])
        gsap.to(el, { y: 0, delay: 1, duration: 0.6, ease: 'circ.out' });

        const animHeader = gsap.timeline({ paused: true });

        animHeader.to(el, { yPercent: -150, duration: 0.6, ease: 'circ.in' });

        const st = ScrollTrigger.create({
                trigger: el,
                start: '+=400px',
                end: 99999,
                onUpdate: (self) => {
                    self.direction === -1 ? animHeader.reverse() : animHeader.play();
                },
                // onEnter: () => el.classList.add('css-backdrop-filter', 'lg:bg-black/40'),
                // onLeave: () => el.classList.remove('css-backdrop-filter', 'lg:bg-black/40'),
        });

        return () => {
                st.kill();
                animHeader.kill();
        };
    }, []);

    return (
        <>
            <header ref={headerRef}
                className="js-header fixed left-0 top-2 lg:top-3 z-99 -translate-y-[150%] pointer-events-none
                   flex items-center w-full py-1 transition-colors duration-500 px-4"
            >
                <div className="container bg-white shadow-md size-fit max-lg:flex max-lg:justify-between py-1.5 px-2 md:px-4 items-center rounded-xl lg:grid lg:grid-cols-5 w-full">
                    <BackHome />
                    <Nav />
                    <CTABase
                        variant="blue"
                        to="/contact"
                        text="Réserver un appel"
                        customClass="ml-auto"
                    />
                    <MenuButton />
                </div>
            </header>

            <Menu />
        </>
    );
}
