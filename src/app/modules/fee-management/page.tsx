import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { CreditCard, Rocket, ShieldCheck, Smartphone, Bell, ReceiptText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "School Fee Management System - Automated & Secure | Campus24by7",
    description: "Automate your school fee collection, send WhatsApp reminders, and generate digital receipts instantly with Campus24by7's fee management module.",
};

const features = [
    {
        title: "Automated WhatsApp Reminders",
        desc: "Schedule automated fee due alerts to parents directly on WhatsApp, increasing collection rates by up to 40%.",
        icon: Bell
    },
    {
        title: "Online Payment Gateway",
        desc: "Integrated with top payment processors for Credit/Debit cards, UPI, and Net Banking.",
        icon: Smartphone
    },
    {
        title: "Instant Digital Receipts",
        desc: "Parents receive official school receipts instantly on their mobile portal after every payment.",
        icon: ReceiptText
    }
];

export default function FeeManagementPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-24">
                <section className="container mx-auto px-4 mb-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                                <Rocket className="w-4 h-4" />
                                Optimize Your Revenue
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                                Fully Automated <span className="gradient-text">Fee Management</span> System
                            </h1>
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                Say goodbye to long queues and manual receipt entries. Campus24by7 provides a 360-degree solution for school fee collection, tracking, and reporting.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="xl" className="rounded-full px-10 font-bold premium-shine shadow-glow">Book Demo</Button>
                                <Button variant="outline" size="xl" className="rounded-full px-10 border-primary/20 bg-primary/5 font-bold">Try for Free</Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                            <div className="relative bg-card border border-border/50 rounded-[3rem] p-8 shadow-card overflow-hidden">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center pb-6 border-b border-border/50">
                                        <h3 className="font-bold text-xl">Fee Dashboard</h3>
                                        <Badge className="bg-emerald-500">Auto-Update</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                                            <p className="text-sm text-muted-foreground mb-1">Collected Total</p>
                                            <p className="text-2xl font-bold">₹42,30,000</p>
                                        </div>
                                        <div className="bg-red-500/5 p-4 rounded-2xl border border-red-500/10">
                                            <p className="text-sm text-muted-foreground mb-1">Total Outstanding</p>
                                            <p className="text-2xl font-bold text-red-500">₹4,12,000</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-muted/30">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                                                    <span className="text-sm font-medium">Student Receipt #{1024 + i}</span>
                                                </div>
                                                <span className="text-sm font-bold text-emerald-500">+ ₹5,400</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-muted/30 py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features for Finance Admins</h2>
                            <p className="text-lg text-muted-foreground">Everything you need to manage institutional cash flow with zero errors.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((f, i) => (
                                <div key={i} className="bg-card p-10 rounded-[2rem] border border-border/50 hover:-translate-y-2 transition-all">
                                    <f.icon className="w-12 h-12 text-primary mb-6" />
                                    <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold text-white ${className}`}>
        {children}
    </span>
);
