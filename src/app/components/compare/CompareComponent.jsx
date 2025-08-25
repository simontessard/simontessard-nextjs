'use client';

import { useRef, useState } from 'react';

export default function CompareComponent() {
    const [pos, setPos] = useState(50); // 0–100
    const ref = useRef(null);

    // calcule la position en % depuis un clientX
    const setFromClientX = (clientX) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = clientX - rect.left;
        const pct = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setPos(pct);
    };

    // pointer events: hover + drag
    const onPointerDown = (e) => {
        e.currentTarget.setPointerCapture?.(e.pointerId);
        setFromClientX(e.clientX);
    };
    const onPointerMove = (e) => {
        // suit le curseur en hover ET en drag
        setFromClientX(e.clientX);
    };
    const onPointerUp = (e) => {
        e.currentTarget.releasePointerCapture?.(e.pointerId);
    };

    return (
        <div className="w-full mb-8 md:mb-14">
            <div
                ref={ref}
                className="relative w-full aspect-[5/3.25] rounded-xl overflow-hidden bg-neutral-900 ring-1
                ring-white/10 shadow-lg select-none touch-none border-3 border-theme-primary cursor-col-resize mb-2 md:mb-4"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
            >
                {/* AVANT (fond) */}
                <img
                    src="/after.png"
                    alt="Version avant du site"
                    className="absolute inset-0 size-full object-cover"
                    draggable={false}
                />

                {/* APRÈS (révélée jusqu’à la position du curseur) */}
                <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                >
                    <img
                        src="/compare.png"
                        alt="Version après du site"
                        className="absolute inset-0 size-full object-cover"
                        draggable={false}
                    />
                </div>

                {/* Labels */}
                <span className="absolute left-3 md:left-4 top-3 md:top-4 rounded-md bg-black px-2.5 py-1 text-sm font-medium text-white/90 backdrop-blur">
                    Avant
                </span>
                <span className="absolute right-3 md:right-4 top-3 md:top-4 rounded-md bg-black px-2.5 py-1 text-sm font-medium text-white/90 backdrop-blur">
                    Après
                </span>

                {/* Poignée + ligne (avec large zone de hit pour le drag) */}
                <div
                    className="absolute inset-y-0 -translate-x-1/2"
                    style={{ left: `${pos}%` }}
                >
                    {/* zone de hit */}
                    <div className="h-full w-8 -ml-4" />
                    {/* ligne/handle visibles */}
                    <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/30" />
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-4 rounded-md bg-theme-secondary shadow ring-1 ring-black/10" />
                </div>

                {/* Fallback accessibilité : slider clavier (invisible visuellement) */}
                <label htmlFor="compare-range" className="sr-only">
                    Comparer avant et après
                </label>
                <input
                    id="compare-range"
                    type="range"
                    min={0}
                    max={100}
                    value={pos}
                    onChange={(e) => setPos(Number(e.target.value))}
                    className="sr-only"
                    aria-label="Comparer avant et après"
                />
            </div>

            <p className="text-center text-[11px] md:text-xs text-white">
                Glissez horizontalement pour comparer
            </p>
        </div>
    );
}
