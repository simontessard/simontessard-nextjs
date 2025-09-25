export default function sitemap() {
    return [
        {
            url: 'https://simontessard.fr',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://simontessard.fr/realisations',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://simontessard.fr/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        }
    ]
}