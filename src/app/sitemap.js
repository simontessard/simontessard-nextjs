export default function sitemap() {
    return [
        {
            url: 'https://simontessard.fr',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://simontessard.fr/a-propos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://simontessard.fr/realisations',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://simontessard.fr/offres',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://simontessard.fr/process',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://simontessard.fr/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://simontessard.fr/legals',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        }
    ]
}