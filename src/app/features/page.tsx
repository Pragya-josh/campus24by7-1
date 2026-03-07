import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Features - Campus24by7 Smart Hub',
    description: 'Explore the comprehensive features of Campus24by7: Attendance, Fees, Exams, Library, Hostel, Transport, and more.',
};

const featuresList = [
    {
        title: "Student Information System",
        description: "Centralized database for student records, documents, and academic history.",
        icon: "🎓",
        link: "/features/student-information-system"
    },
    {
        title: "Fee Management",
        description: "Automated fee collection, invoicing, online payments, and financial reporting.",
        icon: "💳",
        link: "/features/fee-management"
    },
    {
        title: "Attendance Tracking",
        description: "Biometric integration, mobile app attendance, and real-time absence alerts.",
        icon: "📅",
        link: "/features/attendance-management"
    },
    {
        title: "Examination & Grading",
        description: "Exam scheduling, admit card generation, marks entry, and automated report cards.",
        icon: "📝",
        link: "/features/examination-management"
    },
    {
        title: "HR & Payroll",
        description: "Manage staff profile, attendance, leave requests, and automated payroll processing.",
        icon: "👥",
        link: "/features/hr-payroll"
    },
    {
        title: "Transport Management",
        description: "Route planning, vehicle tracking, driver management, and transport fee collection.",
        icon: "🚌",
        link: "/features/transport-management"
    },
    {
        title: "Expense Management",
        description: "Track institutional expenses, budgets, and financial reports efficiently.",
        icon: "🧾",
        link: "/features/expense-management"
    }
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                {/* Header */}
                <section className="pt-32 pb-16 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Modern Campuses</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to manage your educational institution efficiently in one unified platform.
                        </p>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuresList.map((feature, index) => (
                                <Link href={feature.link} key={index} className="group">
                                    <div className="h-full p-8 rounded-2xl border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {feature.description}
                                        </p>
                                        <div className="flex items-center text-primary font-medium">
                                            Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to see these features in action?</h2>
                        <Button size="xl" variant="secondary" asChild>
                            <Link href="/contact">Schedule a Live Demo</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
