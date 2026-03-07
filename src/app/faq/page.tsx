import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: SEO_CONFIG.pages.faq.title,
    description: SEO_CONFIG.pages.faq.description,
};

const faqs = [
    {
        q: "What is Campus24by7 and why is it the best school management system?",
        a: "Campus24by7 is a comprehensive, cloud-based ERP solution designed for schools, colleges, and coaching institutes. It is considered the best school management system because of its modular architecture, 99.9% uptime, user-friendly mobile apps for parents/teachers, and seamless integration of biometric attendance, online fee collection, and academic analytics."
    },
    {
        q: "Can Campus24by7 handle multiple campus branches for a single institution?",
        a: "Yes! Our Enterprise plan is specifically built for institutional groups and chains. It allows directors to manage multiple branches from a single 'Leadership Dashboard' while maintaining branch-specific data isolation for fee tracking, staff payroll, and academic reporting."
    },
    {
        q: "How does Campus24by7 ensure student data security and privacy?",
        a: "Data security is our top priority. Campus24by7 utilizes industry-standard 256-bit SSL encryption, secure cloud infrastructure (AWS/Google Cloud), and automated daily backups. We comply with data privacy best practices to ensure that institutional, financial, and personal student records remain strictly confidential."
    },
    {
        q: "Does the school ERP include a mobile app for parents and students?",
        a: "Absolutely. We provide dedicated Android and iOS mobile applications for Parents, Students, and Teachers. Parents receive real-time notifications for attendance, fee due dates, examination results, and school announcements, ensuring stay they connected with their child's progress 24/7."
    },
    {
        q: "What is the implementation timeline for Campus24by7 ERP?",
        a: "Our rapid deployment model allows most institutions to go live within 3 to 7 working days. Our dedicated onboarding experts handle data migration from your existing spreadsheets or legacy systems, followed by comprehensive staff training to ensure a smooth transition with zero downtime."
    },
    {
        q: "Is Campus24by7 affordable for small schools and coaching centers?",
        a: "Yes, we have designed flexible pricing tiers starting at just ₹4,999/month for small institutions. Our goal is to make high-quality school automation accessible to every educational hub in India, from local coaching centers to large international schools."
    },
    {
        q: "How does Campus24by7 improve school fee collection efficiency?",
        a: "Campus24by7 automates the entire fee lifecycle. It sends automated SMS/Email reminders to parents, provides a secure online payment gateway for instant transactions, and generates digital receipts automatically. Institutions typically see a 30-40% improvement in timely fee collection after implementation."
    },
    {
        q: "Does the system support biometric attendance and GPS bus tracking?",
        a: "Yes, the platform fully integrates with biometric/RFID hardware for automated student and staff attendance. Additionally, our transport module includes real-time GPS tracking for school buses, allowing parents and admins to monitor vehicle location for enhanced student safety."
    }
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16 animate-fade-up">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <HelpCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                        <p className="text-muted-foreground text-lg">
                            Everything you need to know about Campus24by7 and how it can help your institution.
                        </p>
                    </div>

                    <div className="animate-fade-up [animation-delay:200ms]">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-card/50">
                                    <AccordionTrigger className="text-left font-bold py-6 hover:no-underline hover:text-primary transition-colors">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.a
                                }
                            }))
                        })
                    }}
                />
            </main>
            <Footer />
        </div>
    );
}
