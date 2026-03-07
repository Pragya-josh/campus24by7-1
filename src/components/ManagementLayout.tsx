"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap, BarChart3, Users2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Feature {
    title: string;
    description: string;
}

interface ManagementLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    features: Feature[];
    accentColor?: string;
}

export default function ManagementLayout({
    title,
    subtitle,
    description,
    features,
    accentColor = "primary"
}: ManagementLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-1/2 h-1/2 bg-${accentColor}/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2`} />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <Badge variant="outline" className="mb-6 px-4 py-1 animate-fade-up">
                                <Sparkles className="w-3 h-3 mr-2 text-primary" />
                                {subtitle}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-up [animation-delay:100ms] tracking-tight">
                                {title}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-10 animate-fade-up [animation-delay:200ms] leading-relaxed">
                                {description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:300ms]">
                                <Button size="xl" className="rounded-full px-8 shadow-soft hover:shadow-glow">
                                    Book Free Demo <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button size="xl" variant="outline" className="rounded-full px-8 backdrop-blur-sm">
                                    View Study Cases
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 bg-muted/30 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-500 group"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold">Comprehensive Tools for <span className="gradient-text">Excellence</span></h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our platform is built by educators, for educators. We understand the daily challenges of institutional management and have solved them with intuitive tech.
                                </p>
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="space-y-3">
                                        <ShieldCheck className="w-8 h-8 text-primary" />
                                        <h4 className="font-bold">Enterprise Security</h4>
                                        <p className="text-sm text-muted-foreground">End-to-end encryption for all sensitive data.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <Zap className="w-8 h-8 text-primary" />
                                        <h4 className="font-bold">Lightning Fast</h4>
                                        <p className="text-sm text-muted-foreground">Optimized for high-speed performance across devices.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <BarChart3 className="w-8 h-8 text-primary" />
                                        <h4 className="font-bold">Rich Analytics</h4>
                                        <p className="text-sm text-muted-foreground">Data-driven insights for better decision making.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <Users2 className="w-8 h-8 text-primary" />
                                        <h4 className="font-bold">User Centric</h4>
                                        <p className="text-sm text-muted-foreground">Designed for ease of use by staff, students and parents.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full aspect-video bg-muted rounded-[3rem] overflow-hidden relative shadow-glow">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                    <span className="text-muted-foreground font-medium">Interactive Demo Interface</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="gradient-bg p-12 md:p-20 rounded-[3.5rem] text-white text-center shadow-glow overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">Ready to Transform Your Institution?</h2>
                                <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto text-balance">
                                    Join 500+ premium institutions already experience the Campus24by7 advantage.
                                </p>
                                <Button size="xl" variant="secondary" className="rounded-full px-12 h-16 text-lg font-bold hover:scale-105 transition-transform" asChild>
                                    <Link href="/contact">Schedule a Personal Tour</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
