import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesSection from "@/components/ModulesSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
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
