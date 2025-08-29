'use client';

export default function BackHome() {
    return (
        <a href="/"
              className="js-back-home group block size-fit bg-theme-primary rounded-lg p-1 pointer-events-auto"
        >
            <img
                className="size-10 md:size-11"
                src="/logo.png"
                alt="Logo Simon TESSARD"
            />
        </a>
    );
}
