import dynamic from 'next/dynamic';

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), { ssr: true });
const ModulesSection = dynamic(() => import("@/components/ModulesSection"), { ssr: true });
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"), { ssr: true });
const PricingSection = dynamic(() => import("@/components/PricingSection"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: true });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: true });

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
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
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <ModulesSection />
            <BenefitsSection />
            <PricingSection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </main>
    );
}
