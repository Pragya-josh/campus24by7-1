"use client";

import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Copy, MessageSquare, Send, ArrowLeft, RotateCcw, Building2, User, CreditCard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminQuotationsPage() {
    const { isAdmin } = useAuth();
    const [selectedPlan, setSelectedPlan] = useState(PRICING_PLANS[1]); // Default to Pro
    const [clientName, setClientName] = useState("");
    const [customPrice, setCustomPrice] = useState(selectedPlan.price);
    const [clientInstitution, setClientInstitution] = useState("");

    if (!isAdmin) return <div className="pt-32 text-center">Unauthorized. Support access required.</div>;

    const handleSelectPlan = (plan: any) => {
        setSelectedPlan(plan);
        setCustomPrice(plan.price);
    };

    const generateQuotation = () => {
        const greeting = clientName ? `Hello ${clientName},` : "Hello,";
        const institutionText = clientInstitution ? ` for ${clientInstitution}` : "";

        return `${greeting}

This is from the Campus24by7 Support Team. Based on our conversation, here is the customized pricing quotation${institutionText}:

Plan: *${selectedPlan.name}*
Price: *${customPrice}* ${selectedPlan.period || ""}

*Key Features Included:*
${selectedPlan.features.map(f => `• ${f}`).join('\n')}

*Why Campus24by7?*
• Seamless ERP & Management
• 24/7 Priority Support
• Free Onboarding & Training

You can get started with a 14-day free trial here: https://campus24by7.com/contact

Best regards,
Campus24by7 Support`;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateQuotation());
        toast.success("Quotation copied to clipboard!");
    };

    const shareOnWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(generateQuotation())}`;
        window.open(url, "_blank");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-4 max-w-6xl">
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" size="icon" asChild className="rounded-full">
                        <Link href="/admin/leads"><ArrowLeft className="w-5 h-5" /></Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Pricing & Quotation Tool</h1>
                        <p className="text-muted-foreground">Generate personalized pricing plans for your leads.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Step 1: Client Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="border-border/60 shadow-soft rounded-[2rem] overflow-hidden">
                            <CardHeader className="bg-muted/30 pb-6">
                                <CardTitle className="text-xl flex items-center gap-2">
                                    <User className="w-5 h-5 text-primary" />
                                    1. Client Information
                                </CardTitle>
                                <CardDescription>Enter the details of the institution you are quoting for.</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold opacity-70">Contact Person Name</label>
                                        <Input
                                            placeholder="e.g. Dr. Rajesh Kumar"
                                            value={clientName}
                                            onChange={(e) => setClientName(e.target.value)}
                                            className="rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold opacity-70">Institution Name</label>
                                        <Input
                                            placeholder="e.g. DPS International"
                                            value={clientInstitution}
                                            onChange={(e) => setClientInstitution(e.target.value)}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 2: Plan Selection */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 px-6">
                                <CreditCard className="w-5 h-5 text-primary" />
                                2. Select & Customize Plan
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                {PRICING_PLANS.map((plan) => (
                                    <div
                                        key={plan.name}
                                        onClick={() => handleSelectPlan(plan)}
                                        className={`cursor-pointer p-6 rounded-[2rem] border-2 transition-all duration-300 ${selectedPlan.name === plan.name
                                                ? "border-primary bg-primary/5 shadow-glow"
                                                : "border-border bg-card hover:border-primary/20"
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="font-bold text-lg">{plan.name}</h4>
                                            {selectedPlan.name === plan.name && <Badge className="rounded-full bg-primary text-white">Selected</Badge>}
                                        </div>
                                        <div className="text-2xl font-black mb-1">{plan.price}</div>
                                        <div className="text-xs text-muted-foreground mb-4">{plan.period || "One-time"}</div>
                                        <p className="text-xs opacity-70 mb-4 line-clamp-2">{plan.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Price Override */}
                            <Card className="border-primary/20 bg-primary/5 rounded-[2rem]">
                                <CardContent className="pt-6 flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-1">
                                        <h4 className="font-bold mb-1">Price Override</h4>
                                        <p className="text-xs text-muted-foreground">Adjust the price for this specific customer if needed.</p>
                                    </div>
                                    <div className="flex items-center gap-3 bg-background p-2 rounded-2xl border border-primary/20 shadow-inner">
                                        <Input
                                            value={customPrice}
                                            onChange={(e) => setCustomPrice(e.target.value)}
                                            className="border-none bg-transparent focus-visible:ring-0 font-bold text-lg w-32"
                                        />
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setCustomPrice(selectedPlan.price)}
                                            title="Reset to default"
                                            className="rounded-full h-8 w-8"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <Card className="border-border/60 shadow-xl rounded-[2.5rem] overflow-hidden bg-card/50 backdrop-blur-sm">
                                <CardHeader className="bg-primary text-primary-foreground p-8">
                                    <CardTitle className="text-2xl">Quotation Preview</CardTitle>
                                    <CardDescription className="text-primary-foreground/70">Generated message for the client</CardDescription>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <div className="bg-muted/50 p-6 rounded-2xl font-mono text-xs whitespace-pre-wrap border border-border/50 leading-relaxed mb-8 h-80 overflow-y-auto custom-scrollbar">
                                        {generateQuotation()}
                                    </div>

                                    <div className="space-y-3">
                                        <Button className="w-full rounded-2xl h-14 font-bold text-lg shadow-glow" onClick={copyToClipboard}>
                                            <Copy className="w-5 h-5 mr-3" /> Copy Quotation
                                        </Button>
                                        <div className="grid grid-cols-2 gap-3">
                                            <Button variant="outline" className="rounded-2xl h-14 border-emerald-500/20 hover:bg-emerald-50 text-emerald-600 font-bold" onClick={shareOnWhatsApp}>
                                                <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp
                                            </Button>
                                            <Button variant="outline" className="rounded-2xl h-14 border-blue-500/20 hover:bg-blue-50 text-blue-600 font-bold" asChild>
                                                <a href={`mailto:?subject=Quotation - Campus24by7&body=${encodeURIComponent(generateQuotation())}`}>
                                                    <Send className="w-5 h-5 mr-2" /> Email
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="p-8 rounded-[2rem] bg-amber-50 border border-amber-200 text-amber-900 text-sm flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center shrink-0">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Support Tip</p>
                                    <p className="opacity-80">Always include the 14-day free trial link. It significantly increases conversion from manual quotes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
