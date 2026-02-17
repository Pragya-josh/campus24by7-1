import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APP_CONFIG } from "@/config/app.config";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Management System - Campus24by7",
    description:
        "Campus24by7 - Comprehensive School Management System: attendance, fees, academics, transport, HR and more. Book a free demo.",
    keywords: [
        "school management system",
        "school ERP",
        "student management system",
        "fee management system",
        "attendance management",
    ],
};

export default function SchoolManagement() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto px-4 py-16">
                <div className="mb-6">
                    <Link href="/" className="inline-block text-sm text-primary underline">
                        ← Back to Home
                    </Link>
                </div>
                <h1 className="text-4xl font-bold mb-4">School Management System</h1>
                <p className="mb-6">
                    Campus24by7 provides a complete school ERP — manage admissions,
                    attendance, fees, academics, transport, HR/payroll and parent
                    communication in one platform.
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
                    <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Student & staff management</li>
                        <li>Attendance tracking</li>
                        <li>Fees & invoicing</li>
                        <li>Exams and gradebook</li>
                        <li>Transport & route management</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}
