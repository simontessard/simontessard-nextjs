'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { useMenuAnimations } from '@/hooks/useMenuAnimations';

export default function MenuToggle() {
    const { initMenuDom, openMenu, closeMenu } = useMenuAnimations();
    const [isOpen, setIsOpen] = useState(false);
    const topBar = useRef(null);
    const bottomBar = useRef(null);

    useEffect(() => {
        initMenuDom();
    }, [initMenuDom]);

    // quand le menu se ferme ailleurs (clic lien), on reset le bouton
    useEffect(() => {
        const handleClosed = () => {
            setIsOpen(false);
            gsap.to(topBar.current, { rotate: 0, y: 0, duration: 0.3 });
            gsap.to(bottomBar.current, { rotate: 0, y: 0, duration: 0.3 });
        };
        window.addEventListener('menu:closed', handleClosed);
        return () => window.removeEventListener('menu:closed', handleClosed);
    }, []);

    const toggleMenu = useCallback(async () => {
        if (isOpen) {
            await closeMenu();
            // l’évènement 'menu:closed' resettera aussi, mais on garde le setIsOpen au cas où
            setIsOpen(false);
            gsap.to(topBar.current, { rotate: 0, y: 0, duration: 0.3 });
            gsap.to(bottomBar.current, { rotate: 0, y: 0, duration: 0.3 });
        } else {
            openMenu();
            setIsOpen(true);
            gsap.to(topBar.current, { rotate: 45, y: 4, duration: 0.3 });
            gsap.to(bottomBar.current, { rotate: -45, y: -4, duration: 0.3 });
        }
    }, [isOpen, openMenu, closeMenu]);

    return (
        <button
            onClick={toggleMenu}
            className="js-menu-button ml-2 lg:hidden cursor-pointer pointer-events-auto
                 flex flex-col items-center justify-center gap-1.5 p-4 w-10 h-12 rounded-xl"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            type="button"
        >
            <span ref={topBar} className="w-6.5 h-0.5 bg-black block" />
            <span ref={bottomBar} className="w-6.5 h-0.5 bg-black block" />
        </button>
    );
}
