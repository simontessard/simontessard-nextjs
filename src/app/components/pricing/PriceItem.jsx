'use client';

import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";

export default function PriceItem({
                                      title,
                                      citation,
                                      price,
                                      desc,
                                      list = [],
                                      popular = false,
                                  }) {
    return (
        <div
            className={[
                'relative overflow-hidden w-full rounded-2xl md:rounded-3xl shadow-xs p-4 md:p-5 flex flex-col justify-center lf:aspect-[6/7]',
                popular ? 'bg-gradient-primary' : 'bg-white border border-gray-200',
            ].join(' ')}
        >
            <div className="flex flex-col justify-between">
                <div
                    className={[
                        'rounded-xl mb-6 md:mb-8 p-4 md:p-6 shadow-sm',
                        popular ? 'bg-white' : 'bg-white-primary',
                    ].join(' ')}
                >
                    <div className="flex justify-between mb-2 md:mb-3">
                        {/* Icône */}
                        <svg
                            className="size-6 md:size-7"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                        >
                            <g transform="scale(2.81 2.81)">
                                <path
                                    d="M 89.983 5.63 c -0.006 -0.267 -0.016 -0.534 -0.026 -0.802 c -0.011 -0.299 -0.02 -0.597 -0.036 -0.897 c -0.031 -0.602 -0.07 -1.207 -0.121 -1.814 c -0.081 -0.973 -0.854 -1.745 -1.827 -1.827 c -0.607 -0.051 -1.21 -0.089 -1.811 -0.121 c -0.305 -0.016 -0.607 -0.025 -0.909 -0.036 c -0.262 -0.009 -0.525 -0.02 -0.786 -0.025 c -0.437 -0.01 -0.871 -0.013 -1.304 -0.013 c -0.072 0 -0.145 0 -0.217 0.001 c -8.628 0.042 -16.548 2.16 -24.544 6.526 C 58.261 6.7 58.12 6.773 57.979 6.85 c -0.05 0.028 -0.099 0.052 -0.149 0.08 c -0.011 0.006 -0.02 0.016 -0.031 0.022 c -6.556 3.654 -13.101 8.811 -19.875 15.585 c -0.77 0.77 -1.523 1.55 -2.268 2.334 l -13.164 1.001 c -0.385 0.029 -0.753 0.169 -1.06 0.402 L 0.785 41.987 c -0.657 0.5 -0.94 1.352 -0.711 2.145 c 0.228 0.793 0.92 1.364 1.742 1.439 l 19.373 1.749 l 6.134 6.134 c -2.174 0.497 -4.389 1.715 -6.286 3.611 c -1.136 1.137 -2.048 2.411 -2.716 3.803 c -0.873 1.849 -2.79 6.61 -4.82 11.651 l -0.991 2.459 c -0.3 0.744 -0.127 1.595 0.441 2.162 c 0.382 0.383 0.894 0.586 1.415 0.586 c 0.251 0 0.505 -0.048 0.748 -0.146 l 2.547 -1.027 c 5 -2.014 9.723 -3.917 11.576 -4.79 c 1.38 -0.664 2.655 -1.576 3.79 -2.711 c 1.896 -1.896 3.113 -4.111 3.61 -6.285 l 5.952 5.952 l 1.749 19.372 c 0.074 0.822 0.646 1.514 1.439 1.742 c 0.183 0.053 0.369 0.078 0.553 0.078 c 0.614 0 1.207 -0.283 1.592 -0.789 l 15.711 -20.646 c 0.233 -0.307 0.373 -0.675 0.402 -1.06 l 0.971 -12.775 c 0.857 -0.811 1.706 -1.635 2.547 -2.475 c 6.779 -6.779 11.939 -13.327 15.594 -19.887 c 0.004 -0.007 0.01 -0.013 0.014 -0.02 c 0.018 -0.032 0.033 -0.063 0.051 -0.095 c 0.167 -0.301 0.326 -0.602 0.486 -0.904 c 4.207 -7.847 6.251 -15.635 6.295 -24.099 c 0.001 -0.083 0.001 -0.165 0.001 -0.248 C 89.996 6.488 89.993 6.06 89.983 5.63 z M 64.413 37.493 c -1.577 1.577 -3.675 2.447 -5.907 2.447 c -2.231 0 -4.329 -0.869 -5.907 -2.447 c -3.257 -3.258 -3.257 -8.557 0 -11.815 v 0 c 3.259 -3.257 8.559 -3.255 11.814 0 c 1.578 1.577 2.448 3.675 2.448 5.907 S 65.992 35.915 64.413 37.493 z"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>

                        {popular && (
                            <p className="size-fit bg-gradient-to-r from-blue-600 to-theme-primary text-white font-figtree py-1 md:py-1.5 px-2 md:px-2.5 md:px-3 text-xs md:text-sm rounded-md">
                                La + populaire
                            </p>
                        )}
                    </div>

                    <AnimText
                        useScrollTrigger
                        tag="h3"
                        className="text-center text-black text-2xl md:text-3xl font-figtree font-bold mb-1 md:mb-2"
                    >
                        {title}
                    </AnimText>

                    <p className="text-center text-sm md:text-base text-black italic font-light font-figtree mb-4 md:mb-6">
                        « {citation} »
                    </p>

                    <p className="text-center font-chivo font-medium tracking-tighter mb-2 md:mb-4 text-3xl xl:text-4xl 2xl:text-5xl text-black">
                        {price}
                    </p>

                    <p className="text-center text-sm md:text-lg text-black font-light font-figtree mb-6">
                        {desc}
                    </p>

                    <CTABase
                        withScrollTrigger
                        to="/contact"
                        text="Choisir cette offre"
                        variant={popular ? 'blue' : undefined}
                        customClass="w-full justify-center"
                    />
                </div>

                <ul className="flex flex-col gap-2.5 p-3 md:p-5">
                    {list.map((item, index) => (
                        <li
                            key={index}
                            className={[
                                'flex items-center font-figtree text-xs md:text-sm lg:text-lg',
                                popular ? 'text-white' : 'text-black',
                            ].join(' ')}
                        >
                            <div
                                className={[
                                    'shrink-0 p-1 md:p-1.5 rounded-sm md:rounded-lg size-fit mr-2.5 md:mr-3.5',
                                    popular ? 'bg-white' : 'bg-black',
                                ].join(' ')}
                            >
                                <svg
                                    className={[
                                        'shrink-0 size-1.5 md:size-2',
                                        popular ? 'fill-black' : 'fill-white',
                                    ].join(' ')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                </svg>
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
