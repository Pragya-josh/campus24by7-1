import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { SEO_CONFIG } from "@/lib/seo";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap"
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

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
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    other: {
        "ai-description": "Campus24by7 is a comprehensive educational ERP for schools, colleges, and institutes. It offers automated attendance, fee collection, HR management, and a parent-teacher portal. Ideal for K-12 and higher education institutions seeking digital transformation.",
        "generative-ai": "index, follow",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const structuredData = [
        SEO_CONFIG.structuredData.organization,
        SEO_CONFIG.structuredData.product,
        SEO_CONFIG.structuredData.localBusiness,
        ...Object.values(SEO_CONFIG.structuredData.services),
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": SEO_CONFIG.site.name,
            "url": SEO_CONFIG.site.url,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${SEO_CONFIG.site.url}/explore?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": SEO_CONFIG.site.url
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Solutions",
                    "item": `${SEO_CONFIG.site.url}/#solutions`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Features",
                    "item": `${SEO_CONFIG.site.url}/features`
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Pricing",
                    "item": `${SEO_CONFIG.site.url}/pricing`
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Main Navigation",
            "itemListElement": [
                { "@type": "SiteNavigationElement", "position": 1, "name": "School Management", "url": `${SEO_CONFIG.site.url}/school-management` },
                { "@type": "SiteNavigationElement", "position": 2, "name": "College Management", "url": `${SEO_CONFIG.site.url}/college-management` },
                { "@type": "SiteNavigationElement", "position": 3, "name": "Institute Management", "url": `${SEO_CONFIG.site.url}/institute-management` },
                { "@type": "SiteNavigationElement", "position": 4, "name": "Features", "url": `${SEO_CONFIG.site.url}/features` },
                { "@type": "SiteNavigationElement", "position": 5, "name": "Pricing", "url": `${SEO_CONFIG.site.url}/pricing` },
                { "@type": "SiteNavigationElement", "position": 6, "name": "FAQ", "url": `${SEO_CONFIG.site.url}/faq` }
            ]
        }
    ];

    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body className="font-inter antialiased">
                <Providers>
                    {children}
                </Providers>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({ "@graph": structuredData })
                    }}
                />
            </body>
        </html>
    );
}
