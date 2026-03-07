import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Check, X, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
    title: "Compare Campus24by7 vs Others - Best Educational ERP",
    description: "See why Campus24by7 is India's preferred educational ERP compared to traditional legacy systems.",
};

const comparisonData = [
    { feature: "Implementation Time", us: "3-7 Days", them: "30-60 Days" },
    { feature: "WhatsApp Integration", us: "Native & Automated", them: "External Plugin" },
    { feature: "Mobile App for Parents", us: "Included (High Rated)", them: "Extra Charge" },
    { feature: "Cloud Security", us: "AWS/256-bit SSL", them: "Local Servers" },
    { feature: "Support Response", us: "Under 15 Mins", them: "24-48 Hours" },
    { feature: "User Interface", us: "Modern & Mobile-First", them: "Legacy/Complicated" },
];

export default function ComparePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Choosing the <span className="gradient-text">Right ERP</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Don't get stuck with legacy software. See how Campus24by7 provides a modern, faster, and more secure experience for your institution.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto mb-24 overflow-hidden rounded-[2.5rem] border border-border shadow-soft bg-card/50 backdrop-blur-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary/5">
                                    <th className="p-8 text-xl font-bold">Key Factors</th>
                                    <th className="p-8 text-xl font-bold text-primary">Campus24by7</th>
                                    <th className="p-8 text-xl font-bold opacity-50 text-muted-foreground">Other ERPs</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                                        <td className="p-8 font-bold text-lg">{row.feature}</td>
                                        <td className="p-8">
                                            <div className="flex items-center gap-3 text-primary font-bold text-lg">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <Check className="w-5 h-5" />
                                                </div>
                                                {row.us}
                                            </div>
                                        </td>
                                        <td className="p-8">
                                            <div className="flex items-center gap-3 text-muted-foreground opacity-60 font-medium">
                                                <X className="w-4 h-4" />
                                                {row.them}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                        <div className="p-8 glass-card rounded-3xl">
                            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">No Setup Fee</h3>
                            <p className="text-muted-foreground">Transparent pricing with zero hidden implementation charges.</p>
                        </div>
                        <div className="p-8 glass-card rounded-3xl">
                            <ShieldCheck className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">Bank-Grade Security</h3>
                            <p className="text-muted-foreground">Your student data is encrypted and backed up daily on the cloud.</p>
                        </div>
                        <div className="p-8 glass-card rounded-3xl">
                            <HeartHandshake className="w-12 h-12 text-accent mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">Customer Success</h3>
                            <p className="text-muted-foreground">A dedicated account manager to ensure your team is fully trained.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
