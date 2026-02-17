import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APP_CONFIG } from "@/config/app.config";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "College Management System - Campus24by7",
    description:
        "Campus24by7 - College Management ERP: manage courses, students, fees, exams, payroll and academic administration. Book a demo.",
    keywords: [
        "college management system",
        "college ERP",
        "academic management software",
        "student information system",
    ],
};

export default function CollegeManagement() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto px-4 py-16">
                <div className="mb-6">
                    <Link href="/" className="inline-block text-sm text-primary underline">
                        ← Back to Home
                    </Link>
                </div>
                <h1 className="text-4xl font-bold mb-4">College Management System</h1>
                <p className="mb-6">
                    Campus24by7 helps colleges manage courses, departments, students,
                    examinations, research records, payroll and administration.
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
                    <h2 className="text-2xl font-semibold mb-3">Why Colleges Choose Us</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Course & curriculum management</li>
                        <li>Exam scheduling & grading</li>
                        <li>Research & publication tracking</li>
                        <li>Finance & payroll integration</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}
