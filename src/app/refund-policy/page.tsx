import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy - Campus24by7",
    description: "Information about refunds and cancellation for Campus24by7 subscription services.",
};

export default function RefundPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-24">
                <article className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8">Refund & Cancellation Policy</h1>
                    <p className="text-muted-foreground mb-12">Last Updated: February 22, 2026</p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Subscription Cancellation</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You can cancel your Campus24by7 subscription at any time through your billing dashboard. Upon cancellation, your service will remain active until the end of the current billing period.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Refund Conditions</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Due to the nature of our digital SaaS platform and the initial data migration/setup effort involved, we generally do not offer refunds once a billing cycle has commenced. However, if you experience technical issues that we cannot resolve within 7 business days, a pro-rated refund may be issued at our discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Support</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                For any billing related queries, please contact us at support@campus24by7.com.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
