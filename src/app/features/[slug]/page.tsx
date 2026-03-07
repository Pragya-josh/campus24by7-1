import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

type FeaturePageProps = {
    title: string;
    description: string;
    benefits: string[];
    imageSrc?: string;
    slug: string;
}

// In a real app this would be a database fetch
const getFeatureData = (slug: string): FeaturePageProps | null => {
    const features: Record<string, FeaturePageProps> = {
        "student-information-system": {
            title: "Student Information System",
            description: "Manage the entire lifecycle of a student from admission to alumni status.",
            slug: "student-information-system",
            benefits: [
                "Digital Admission Forms",
                "Student Profile Management",
                "Document Repository",
                "Alumni Management",
                "Identity Card Generation"
            ]
        },
        "fee-management": {
            title: "Fee Management System",
            description: "Completely automate your fee collection and financial reporting.",
            slug: "fee-management",
            benefits: [
                "Custom Fee Structures",
                "Online Payment Gateway Integration",
                "Automated Invoicing & Reminders",
                "Scholarship Management",
                "Daily Collection Reports"
            ]
        },
        "attendance-management": {
            title: "Attendance Management",
            description: "Track student and staff attendance with biometric and mobile app support.",
            slug: "attendance-management",
            benefits: [
                "Biometric Machine Integration",
                "Mobile App Attendance for Teachers",
                "Leave Management Workflow",
                "SMS Alerts to Parents",
                "Monthly Attendance Reports"
            ]
        },
        "expense-management": {
            title: "Expense Management",
            description: "Track and manage your institution's expenses, budgets, and financial health.",
            slug: "expense-management",
            benefits: [
                "Detailed Expense Tracking",
                "Budget Allocation & Monitoring",
                "Vendor Management",
                "Purchase Order Workflow",
                "Comprehensive Financial Reports"
            ]
        },
        "examination-management": {
            title: "Examination & Grading",
            description: "Streamline your entire examination process from scheduling to result publication.",
            slug: "examination-management",
            benefits: [
                "Exam Schedule Builder",
                "Automatic Admit Card Generation",
                "Online Marks entry",
                "Custom Report Card Designer",
                "Result Analysis & Analytics"
            ]
        },
        "hr-payroll": {
            title: "HR & Payroll",
            description: "Manage your staff records, attendance, and payroll with ease.",
            slug: "hr-payroll",
            benefits: [
                "Staff Profile Management",
                "Leave & Attendance Tracking",
                "Automated Payroll Processing",
                "PF & Tax Management",
                "Performance Appraisals"
            ]
        },
        "transport-management": {
            title: "Transport Management",
            description: "Manage your vehicle fleet, routes, and student safety effectively.",
            slug: "transport-management",
            benefits: [
                "Route & Stop Management",
                "Vehicle Maintenance Tracking",
                "Driver & Attendant Records",
                "Transport Fee Collection",
                "GPS Tracking Integration"
            ]
        }
    }
    return features[slug] || null;
}

// Generate static params for static export
export async function generateStaticParams() {
    const features = [
        "student-information-system",
        "fee-management",
        "attendance-management",
        "expense-management",
        "examination-management",
        "hr-payroll",
        "transport-management"
    ];

    return features.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const feature = getFeatureData(params.slug);
    if (!feature) return { title: 'Feature Not Found' };
    return {
        title: `${feature.title} | Campus24by7`,
        description: feature.description,
    };
}


export default function FeatureDetail({ params }: { params: { slug: string } }) {
    const feature = getFeatureData(params.slug);

    if (!feature) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Feature Not Found</h1>
                    <Link href="/features" className="text-primary hover:underline">Back to Features</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32">
                {/* Hero */}
                <section className="container mx-auto px-4 pb-20">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                Feature Spotlight
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                {feature.title}
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                {feature.description}
                            </p>
                            <div className="flex gap-4">
                                <Button size="xl" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                                <Button size="xl" variant="outline" asChild>
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 bg-muted rounded-3xl aspect-square flex items-center justify-center">
                            {/* Placeholder for feature image */}
                            <span className="text-muted-foreground">Feature Illustration</span>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-muted/30 py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {feature.benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-card p-6 rounded-xl border flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <span className="font-medium text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 text-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto space-y-8 bg-primary text-primary-foreground p-12 rounded-3xl">
                            <h2 className="text-3xl font-bold">Transform your campus with {feature.title}</h2>
                            <p className="text-lg opacity-90">Schedule a personalized demo to see how this feature works in real-time.</p>
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">Book Demo <ArrowRight className="ml-2 w-5 h-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
