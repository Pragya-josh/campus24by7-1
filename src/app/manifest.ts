import { MetadataRoute } from 'next';
import { APP_CONFIG } from '@/config/app.config';


export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: APP_CONFIG.name,
        short_name: "Campus24by7",
        description: APP_CONFIG.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: APP_CONFIG.theme.primaryColor,
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    };
}
