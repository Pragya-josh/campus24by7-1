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
        '/explore',
        '/features',
        '/features/student-information-system',
        '/features/fee-management',
        '/features/attendance-management',
        '/features/expense-management',
        '/features/examination-management',
        '/features/hr-payroll',
        '/features/transport-management',
        '/pricing',
        '/contact',
        '/about',
        '/faq',
        '/privacy',
        '/terms',
        '/refund-policy',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : route.includes('management') || route === '/explore' ? 0.9 : 0.7,
    }));

    return routes;
}
