'use client';

import React, { useEffect, useRef, useState, memo } from 'react';
import { gsap } from 'gsap';
import rawFaq from '@/data/faq.json';
import AnimText from '@/app/components/utils/AnimText';

// ✅ Empêche les re-renders inutiles de l'anim au clic
const MemoAnimText = memo(
    AnimText,
    (prev, next) =>
        prev.tag === next.tag &&
        prev.useScrollTrigger === next.useScrollTrigger &&
        prev.children === next.children // string inchangée => pas de re-render
);

export default function FaqList() {
    const [faq, setFaq] = useState(() => rawFaq.map((it) => ({ ...it, open: false })));
    const answerEls = useRef([]);

    const setAnswerRef = (el, index) => {
        if (el) answerEls.current[index] = el;
    };

    const toggle = (index) => {
        // état "avant" la maj, pour savoir si on ouvre ou ferme
        const isOpening = !faq[index].open;

        setFaq((prev) => {
            const next = [...prev];
            next[index] = { ...next[index], open: !next[index].open };
            return next;
        });

        const el = answerEls.current[index];
        if (!el) return;

        if (isOpening) {
            gsap.to(el, {
                maxHeight: el.scrollHeight + 'px',
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            });
        } else {
            gsap.to(el, {
                maxHeight: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.inOut',
            });
        }
    };

    // Recalcule la hauteur visible si la fenêtre change (facultatif)
    useEffect(() => {
        const onResize = () => {
            faq.forEach((item, i) => {
                const el = answerEls.current[i];
                if (el && item.open) {
                    el.style.maxHeight = el.scrollHeight + 'px';
                }
            });
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [faq]);

    return (
        <ul className="w-full">
            {faq.map((item, index) => (
                <li
                    key={index}
                    onClick={() => toggle(index)}
                    className={[
                        'cursor-pointer group shadow-xs transition-colors duration-300 pt-4 px-4 pb-3 md:pb-4 xl:pb-5 md:px-5 md:pt-5 xl:pt-6 xl:px-6 rounded-xl md:rounded-2xl mb-4 md:mb-6',
                        item.open ? 'bg-theme-primary' : 'bg-white',
                        !item.open && 'md:hover:bg-theme-primary',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                >
                    <div className="flex justify-between items-center gap-2 mb-1">
                        <h3
                            className={[
                                'transition-colors duration-300 font-figtree md:text-lg xl:text-xl font-medium',
                                item.open ? 'text-white' : 'md:group-hover:text-white',
                            ].join(' ')}
                        >
                            {/* ✅ Utilise la version mémoïisée : n’est pas re-rendue au clic */}
                            <MemoAnimText useScrollTrigger tag="span">
                                {item.question}
                            </MemoAnimText>
                        </h3>

                        <svg
                            className="shrink-0 size-8 md:size-10 rounded-full p-1.5 md:p-2 bg-white"
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path
                                d="M5 10.3125H15"
                                stroke="#1C211C"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            {!item.open && (
                                <path
                                    d="M10 5.3125V15.3125"
                                    stroke="#1C211C"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            )}
                        </svg>
                    </div>

                    <div
                        className="overflow-hidden transition-all duration-300 ease-out"
                        ref={(el) => setAnswerRef(el, index)}
                        style={{ maxHeight: 0, opacity: 0 }}
                    >
                        <p
                            className={[
                                'max-md:text-sm font-figtree font-light transition-colors duration-300',
                                item.open ? 'text-white' : 'md:group-hover:text-white',
                            ].join(' ')}
                        >
                            {item.answer}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
