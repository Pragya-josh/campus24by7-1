import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
    title: SEO_CONFIG.pages.privacy.title,
    description: SEO_CONFIG.pages.privacy.description,
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-24">
                <article className="container mx-auto px-4 max-w-4xl prose prose-slate dark:prose-invert">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: February 22, 2026</p>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Campus24by7 collects information necessary for the operation of its institutional management platform, including student records, teacher details, and administrative data provided by the subscribing institution.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The data collected is used solely for the purpose of providing the service, including attendance tracking, fee management, academic reporting, and institutional communication. We never sell your data to third-party advertisers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement robust administrative and technical security measures to protect against the loss, misuse, or alteration of data under our control. All sensitive financial data is encrypted using industry-standard protocols.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Institutions have the right to access, edit, or delete their data at any time through their administrator dashboard. Upon termination of service, we provide data export options and ensure secure deletion of records after a retention period.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
