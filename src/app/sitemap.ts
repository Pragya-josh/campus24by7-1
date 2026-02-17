import { MetadataRoute } from 'next';
import { APP_CONFIG } from '@/config/app.config';


export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = APP_CONFIG.links.website;

    // meaningful pages for SEO
    const routes = [
        '',
        '/school-management',
        '/college-management',
        '/institute-management',
        '/features',
        '/pricing',
        '/contact',
        '/blog',
        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
