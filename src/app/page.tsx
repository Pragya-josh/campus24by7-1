import HomeClient from "@/components/HomeClient";
import { SEO_CONFIG } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: SEO_CONFIG.pages.home.title,
    description: SEO_CONFIG.pages.home.description,
    keywords: SEO_CONFIG.pages.home.keywords,
};

export default function Home() {
    return (
        <main className="min-h-screen">
            <HomeClient />
        </main>
    );
}
