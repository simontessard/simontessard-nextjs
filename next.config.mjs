/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
        formats: ["image/avif", "image/webp"],
        deviceSizes: [320, 640, 828, 1080, 1200, 1600, 1920],
    },
};

export default nextConfig;
