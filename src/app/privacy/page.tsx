import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Campus24by7",
    description:
        "Privacy Policy for Campus24by7. Learn what information we collect, how we use it, and your rights regarding your data.",
    keywords: [
        "privacy policy",
        "data protection",
        "campus24by7 privacy",
        "personal data",
    ],
};

export default function Privacy() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto px-4 py-16">
                <div className="mb-6">
                    <Link href="/" className="inline-block text-sm text-primary underline">
                        ← Back to Home
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
                    <p className="mb-2">We may collect the following information from users:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Login credentials (encrypted)</li>
                        <li>Academic or institutional details (if applicable)</li>
                        <li>Device information (browser type, operating system)</li>
                        <li>Usage data for improving app performance</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <p className="mb-2">We use the collected data to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Provide and maintain our services</li>
                        <li>Authenticate users and manage accounts</li>
                        <li>Communicate important updates and notifications</li>
                        <li>Improve functionality, security, and user experience</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">3. Data Sharing & Disclosure</h2>
                    <p className="mb-2">We do not sell, trade, or rent users’ personal data. Data may be shared only:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>When required by law</li>
                        <li>With trusted services necessary for app functionality (such as hosting or authentication)</li>
                        <li>To protect our legal rights or prevent misuse</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
                    <p>We take appropriate measures to protect user data from unauthorized access, loss, misuse, or disclosure. However, no method of transmission over the Internet is 100% secure.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">5. Cookies & Tracking</h2>
                    <p>We may use cookies or similar technologies to maintain user sessions, improve site performance, and analyze usage trends. Users can control cookies through their browser settings.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">6. Children’s Privacy</h2>
                    <p>Campus24by7 is not intended for children under the age of 13. We do not knowingly collect personal data from children. If such data is identified, it will be promptly deleted.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">7. Third-Party Services</h2>
                    <p>Our application may contain links to third-party websites or services. We are not responsible for the privacy practices of those services.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">8. Data Retention</h2>
                    <p>Personal data is retained only for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">9. User Rights</h2>
                    <p>Depending on applicable laws, users may have the right to access, correct, or request deletion of their personal data. Requests can be submitted using the contact details below.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">10. Changes to This Policy</h2>
                    <p>We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting on this page, and the updated date will be revised accordingly.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">11. Contact Information</h2>
                    <p>For questions or concerns, please contact us at <a href="mailto:support@campus24by7.com" className="text-primary underline">support@campus24by7.com</a>.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}
