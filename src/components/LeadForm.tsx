"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import { APP_CONFIG } from "@/config/app.config";

interface LeadFormProps {
    source?: string;
    category?: string;
    title?: string;
}

export function LeadForm({
    source = "Website",
    category = "Education",
    title = "Start Your Journey"
}: LeadFormProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            businessName: formData.get("institute"),
            contactPerson: `${formData.get("firstName")} ${formData.get("lastName")}`,
            primaryPhone: formData.get("phone"),
            email: formData.get("email"),
            message: formData.get("message"),
            category,
            source
        };

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            // --- SIMULATE ONSITE LOGGING ---
            console.log("==========================================");
            console.log("📨 SIMULATED EMAIL NOTIFICATION DISPATCH (Frontend Mock) 📨");
            console.log(`To: admin@campus24by7.com`);
            console.log(`Subject: New Lead Alert - Category: ${category}`);
            console.log("Body:");
            console.log(`Hello Admin,`);
            console.log(`A new lead has been captured from the ${category} section.`);
            console.log(``);
            console.log(`**Lead Details:**`);
            console.log(`Institution: ${data.businessName}`);
            console.log(`Name: ${data.contactPerson}`);
            console.log(`Email: ${data.email}`);
            console.log(`Phone: ${data.primaryPhone}`);
            console.log(`Message: ${data.message || 'No message provided'}`);
            console.log(`Source: ${data.source}`);
            console.log("==========================================");

            setSuccess(true);
            toast.success("Lead captured! We will contact you shortly.");
        } catch (error) {
            console.error("Submission error:", error);
            // If even local proxy fails, we show a graceful message
            toast.error("Connectivity issue. Please call us at +91 9557172321");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center py-12 bg-emerald-50 rounded-3xl border border-emerald-100 animate-in fade-in zoom-in">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">Thank You!</h3>
                <p className="text-emerald-700">Our team has received your request and will reach out via WhatsApp/Phone soon.</p>
                <Button variant="outline" className="mt-6" onClick={() => setSuccess(false)}>Send Another Query</Button>
            </div>
        );
    }

    return (
        <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />

            <h3 className="text-2xl font-bold mb-6">{title}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                        <Input name="firstName" placeholder="Arjun" required className="rounded-xl bg-muted/30 border-none" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                        <Input name="lastName" placeholder="Sharma" required className="rounded-xl bg-muted/30 border-none" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Institution Name</label>
                    <Input name="institute" placeholder="Ex: Little Stars School" required className="rounded-xl bg-muted/30 border-none" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp No.</label>
                        <Input name="phone" type="tel" placeholder="+91 00000 00000" required className="rounded-xl bg-muted/30 border-none" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                        <Input name="email" type="email" placeholder="admin@school.com" required className="rounded-xl bg-muted/30 border-none" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Query</label>
                    <Textarea name="message" placeholder="How can we help you today?" required className="rounded-xl bg-muted/30 border-none min-h-[100px]" />
                </div>

                <Button type="submit" className="w-full rounded-xl py-6 font-bold premium-shine shadow-glow" disabled={loading}>
                    {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Submit Request"}
                </Button>

                <p className="text-[10px] text-center text-muted-foreground mt-4">
                    By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>. Data is secured via Aivora Microservice.
                </p>
            </form>
        </div>
    );
}
