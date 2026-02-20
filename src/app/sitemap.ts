import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    // Using an environment variable for the base URL offers flexibility, with a fallback
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tapmi.edu.in';

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1, // Homepage has the highest priority
        },
        {
            url: `${baseUrl}/intersection2026`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9, // This is the main content page as per redirection in /page.tsx
        }
    ];
}
