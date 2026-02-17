import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APP_CONFIG } from "@/config/app.config";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Institute & Coaching Management - Campus24by7",
    description:
        "Campus24by7 supports institutes and coaching centers with batch management, test-series, student progress tracking, fee management and scheduling. Book a free demo.",
    keywords: [
        "institute management system",
        "coaching management system",
        "coaching center software",
        "batch management",
        "test series management",
    ],
};

export default function InstituteManagement() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto px-4 py-16">
                <div className="mb-6">
                    <Link href="/" className="inline-block text-sm text-primary underline">
                        ← Back to Home
                    </Link>
                </div>
                <h1 className="text-4xl font-bold mb-4">Institute & Coaching Management</h1>
                <p className="mb-6">
                    Campus24by7 is built to support institutes and coaching centres with
                    features such as batch management, test series, student progress
                    tracking, scheduling, and fee collection.
                </p>

                <div className="flex gap-4">
                    <Button asChild>
                        <a href={APP_CONFIG.links.bookSlot} target="_blank" rel="noopener noreferrer">📅 Book Free Demo</a>
                    </Button>
                    <Button asChild>
                        <a href={APP_CONFIG.links.contactWhatsApp} target="_blank" rel="noopener noreferrer">💬 Talk To Sales</a>
                    </Button>
                </div>

                <section className="mt-10">
                    <h2 className="text-2xl font-semibold mb-3">Core Capabilities</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Batch & timetable management</li>
                        <li>Test series & result analytics</li>
                        <li>Attendance & fee tracking</li>
                        <li>Student progress reporting</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}
