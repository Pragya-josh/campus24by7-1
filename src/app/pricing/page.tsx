import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing - Campus24by7 Smart Hub',
    description: 'Flexible and affordable pricing plans for schools, colleges, and institutes. Choose the best plan for your campus.',
    alternates: {
        canonical: "/pricing",
    },
};

const plans = [
    {
        name: "Starter",
        description: "Essential features for small schools & institutes",
        price: "₹49",
        unit: "/student/month",
        features: [
            "Student Information System",
            "Attendance Management",
            "Fee Collection",
            "Basic Reports",
            "Email Support"
        ],
        cta: "Start Free Trial",
        popular: false
    },
    {
        name: "Pro",
        description: "Complete solution for growing campuses",
        price: "₹99",
        unit: "/student/month",
        features: [
            "Everything in Starter",
            "Examination & Grading",
            "Transport Management",
            "Library Management",
            "Parent Mobile App",
            "Priority Support"
        ],
        cta: "Get Started",
        popular: true
    },
    {
        name: "Enterprise",
        description: "Advanced features for large institutions",
        price: "Custom",
        unit: "",
        features: [
            "Everything in Pro",
            "Multi-branch Management",
            "HR & Payroll",
            "Custom API Integration",
            "Dedicated Account Manager",
            "On-premise Deployment Option"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose the plan that fits your institution's needs. No hidden set-up fees.
                    </p>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular
                                    ? 'border-primary shadow-2xl scale-105 z-10 bg-card'
                                    : 'border-border bg-card/50'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-muted-foreground">{plan.description}</p>
                                </div>
                                <div className="mb-8">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.unit}</span>
                                </div>
                                <ul className="mb-8 space-y-4 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className="w-full"
                                    variant={plan.popular ? "default" : "outline"}
                                    size="lg"
                                    asChild
                                >
                                    <Link href="/contact">{plan.cta}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="mt-32 max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-card rounded-xl border">
                            <h3 className="font-semibold text-lg mb-2">Is there a setup fee?</h3>
                            <p className="text-muted-foreground">No, we do not charge any setup fees for standard implementation.</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border">
                            <h3 className="font-semibold text-lg mb-2">Can I upgrade later?</h3>
                            <p className="text-muted-foreground">Yes, you can upgrade your plan at any time. The changes will be reflected in your next billing cycle.</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border">
                            <h3 className="font-semibold text-lg mb-2">Do you offer training?</h3>
                            <p className="text-muted-foreground">Yes, we provide comprehensive online training for your staff and administrators.</p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
