import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
    title: SEO_CONFIG.pages.terms.title,
    description: SEO_CONFIG.pages.terms.description,
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-24">
                <article className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                    <p className="text-muted-foreground mb-12">Last Updated: February 22, 2026</p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing or using the Campus24by7 platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We grant institutional users a limited, non-exclusive, non-transferable license to use the Campus24by7 platform for their internal administrative and educational purposes based on their subscription tier.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Subscription & Payments</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Fees for our services are billed in advance on a monthly or annual basis and are non-refundable. We reserve the right to modify our pricing with prior notice to our subscribers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                In no event shall Campus24by7 or its suppliers be liable for any damages arising out of the use or inability to use the platform, even if Campus24by7 has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
