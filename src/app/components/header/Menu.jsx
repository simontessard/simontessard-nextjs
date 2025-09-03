'use client';

import { useEffect, useCallback } from 'react';
import { navItemsMobile } from '@/data/navigation';
import { useMenuAnimations } from '@/hooks/useMenuAnimations';

export default function Menu() {
    const { initMenuDom, closeMenu } = useMenuAnimations();

    useEffect(() => {
        initMenuDom();
    }, [initMenuDom]);

    const navigateWithNativeScroll = useCallback(
        async (target, e) => {
            e.preventDefault();
            await closeMenu(); // émet 'menu:closed' → le bouton se reset

            if (typeof target === 'string' && target.startsWith('#')) {
                const el = document.querySelector(target);
                if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // offset 80px
                    window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                    window.location.hash = target.replace('#', '');
                }
                return;
            }

            if (typeof target === 'string' && target.length > 0) {
                window.location.assign(target);
            }
        },
        [closeMenu]
    );

    return (
        <div
            className="js-menu hidden bg-black/90 fixed z-[100] inset-0
            flex-col justify-end size-full p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
        >
            <div className="js-menu--content relative translate-y-20
                      flex flex-col justify-center bg-white
                      h-[75%] w-full rounded-xl p-6">
                <ul className="flex flex-col items-center gap-4">
                    {navItemsMobile.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.path || '#'}
                                onClick={(e) => navigateWithNativeScroll(item.path, e)}
                                className="js-menu--link opacity-0 translate-y-6 rounded-xl
                           py-2 px-4.5 inline-block
                           text-black font-figtree text-2xl"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
