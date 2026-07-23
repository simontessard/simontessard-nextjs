// app/robots.js
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',   // Tous les robots
                disallow: '/',    // Interdit tout le site
            },
        ],
    };
}
