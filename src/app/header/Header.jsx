'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackHome from "@/app/header/BackHome";
import Nav from "@/app/header/Nav";
import MenuButton from "@/app/header/MenuButton";
import CTABase from "@/app/common/ui/CTABase";
import Menu from "@/app/header/Menu";

export default function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        const el = headerRef.current;
        if (!el) return;

        gsap.to(el, { y: 0, delay: .7, duration: 0.65, ease: 'circ.out' });

        const animHeader = gsap.timeline({ paused: true });

        animHeader.to(el, { yPercent: -150, duration: 0.6, ease: 'circ.in' });

        const st = ScrollTrigger.create({
                trigger: el,
                start: '+=400px',
                end: 99999,
                onUpdate: (self) => {
                    self.direction === -1 ? animHeader.reverse() : animHeader.play();
                }
        });

        return () => {
                st.kill();
                animHeader.kill();
        };
    }, []);

    return (
        <>
            <header ref={headerRef}
                className="js-header fixed left-0 top-0 z-101 -translate-y-[150%] pointer-events-none
                   flex items-center w-full py-1 md:py-2 bg-white-primary transition-colors duration-500"
            >
                <div className="container">
                    <div className="size-fit max-lg:flex max-lg:justify-between py-1 items-center lg:grid lg:grid-cols-5 w-full">
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
                </div>

            </header>

            <Menu />
        </>
    );
}
