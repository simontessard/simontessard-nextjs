// app/robots.js

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',   // tous les robots
                allow: '/',       // autorise tout le site
            },
        ],
        sitemap: 'https://simontessard.fr/sitemap.xml',
    };
}
