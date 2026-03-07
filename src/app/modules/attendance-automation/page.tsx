import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { CalendarCheck, Shield, Zap, Bell, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Attendance Automation System - Biometric & App-Based | Campus24by7",
    description: "Automate student and staff attendance with biometric integration, RFID, and mobile app tracking. Real-time alerts for parents.",
};

const features = [
    {
        title: "Biometric Integration",
        desc: "Seamlessly connect with ZKTeco and other biometric devices for staff and student logs.",
        icon: Fingerprint
    },
    {
        title: "Mobile App Attendance",
        desc: "Teachers can mark attendance in seconds via our dedicated app even without internet.",
        icon: Zap
    },
    {
        title: "Absence Alerts",
        desc: "Automatic SMS and App notifications to parents if a student is absent or late.",
        icon: Bell
    }
];

export default function AttendanceAutomationPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Smart <span className="gradient-text">Attendance Automation</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Eliminate proxy attendance and manual registers. Secure, fast, and transparent tracking for your entire institution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center container mx-auto px-4 mb-24">
                    <div className="relative bg-card p-12 rounded-[3rem] border border-border shadow-soft">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <CalendarCheck className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold">Live Tracking</h2>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-200" />
                                        <div>
                                            <p className="font-bold text-sm">Student Name {i}</p>
                                            <p className="text-xs text-muted-foreground">Class 10-A</p>
                                        </div>
                                    </div>
                                    <Badge className={i % 2 === 0 ? "bg-emerald-500" : "bg-red-500"}>{i % 2 === 0 ? "Present" : "Absent"}</Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-12">
                        {features.map((f, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="hidden sm:flex w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center shrink-0">
                                    <f.icon className="text-primary w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
                                    <p className="text-lg text-muted-foreground">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                        <Button size="xl" className="w-full sm:w-auto rounded-full px-12 font-bold shadow-glow">Request Custom Setup</Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <span className={`px-4 py-1 rounded-full text-[10px] uppercase font-bold text-white ${className}`}>
        {children}
    </span>
);
