import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Users, Globe, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
    title: SEO_CONFIG.pages.about.title,
    description: SEO_CONFIG.pages.about.description,
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-24">
                <section className="container mx-auto px-4 max-w-4xl text-center mb-20 animate-fade-up">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/20 bg-primary/5">
                        <Sparkles className="w-3 h-3 mr-2" />
                        Our Vision for Education
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                        Revolutionizing <span className="gradient-text">Institutional Management</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        At Campus24by7, we believe that education is the cornerstone of society. Our mission is to empower every school, college, and coaching center with the technology they need to focus on what matters most: teaching.
                    </p>
                </section>

                <section className="bg-muted/30 py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: <Target className="w-6 h-6" />, title: "Mission Driven", desc: "Digitalizing 10,000+ institutions across India by 2028." },
                                { icon: <Users className="w-6 h-6" />, title: "Community First", desc: "Built on feedback from 500+ educators and administrators." },
                                { icon: <Globe className="w-6 h-6" />, title: "Global Standards", desc: "Adopting the best technical practices for educational ERP." },
                                { icon: <ShieldCheck className="w-6 h-6" />, title: "Data Security", desc: "Enterprise-grade encryption for student and financial records." }
                            ].map((item, i) => (
                                <div key={i} className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-soft">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-24 max-w-4xl leading-relaxed animate-fade-up">
                    <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
                    <div className="space-y-6 text-lg text-muted-foreground">
                        <p>
                            Founded in Dehradun, Uttarakhand, Campus24by7 started as a small project to help local coaching centers manage their student attendance. Today, it has evolved into a comprehensive SaaS platform serving thousands of students.
                        </p>
                        <p>
                            We understand that every institution is unique. Whether you are a small pre-school or a large multi-branch university, our modular architecture adapts to your specific workflows, ensuring a seamless digital transition.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
