import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/Providers";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
    title: {
        default: SEO_CONFIG.site.name,
        template: `%s | ${SEO_CONFIG.site.name}`,
    },
    description: SEO_CONFIG.site.description,
    keywords: SEO_CONFIG.keywords.primary,
    authors: [{ name: SEO_CONFIG.site.author }],
    metadataBase: new URL(SEO_CONFIG.site.url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SEO_CONFIG.site.url,
        title: SEO_CONFIG.site.name,
        description: SEO_CONFIG.site.description,
        siteName: SEO_CONFIG.site.name,
    },
    twitter: {
        card: "summary_large_image",
        title: SEO_CONFIG.site.name,
        description: SEO_CONFIG.site.description,
        creator: "@campus24by7",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(SEO_CONFIG.structuredData.organization),
                    }}
                />
            </body>
        </html>
    );
}
