"use client";

import dynamic from 'next/dynamic';

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), { ssr: false });
const ModulesSection = dynamic(() => import("@/components/ModulesSection"), { ssr: false });
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"), { ssr: false });
const PricingSection = dynamic(() => import("@/components/PricingSection"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function HomeClient() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <ModulesSection />
            <BenefitsSection />
            {/* <PricingSection /> */}
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </>
    );
}
