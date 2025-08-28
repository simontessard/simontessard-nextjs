'use client';

export default function BackHome() {
    return (
        <a href="/"
              className="js-back-home group block size-fit lg:bg-theme-primary rounded-lg lg:p-1 pointer-events-auto"
        >
            <img
                className="size-13 lg:size-11"
                src="/logotest.png"
                alt="Logo Simon TESSARD"
            />
        </a>
    );
}
