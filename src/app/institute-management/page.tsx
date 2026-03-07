import ManagementLayout from "@/components/ManagementLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Institute Management System - Campus24by7",
    description: "Specialized ERP for coaching centers and vocational institutes to manage batches, leads, and results.",
};

const instituteFeatures = [
    {
        title: "Lead & Query Mgmt",
        description: "Capture and track inquiries from all channels, with automated follow-ups to improve your conversion rates."
    },
    {
        title: "Batch Coordination",
        description: "Dynamic schedule management for multiple batches, subjects, and teachers across different time slots."
    },
    {
        title: "Performance Tracking",
        description: "Detailed test series management, rank generation, and student comparative analysis reports."
    },
    {
        title: "Communication Suite",
        description: "Instant batch alerts, result notifications, and class reminders via WhatsApp, SMS, and App-push."
    },
    {
        title: "Digital Study Material",
        description: "Securely share notes, video lectures, and online assignments through a dedicated student portal."
    },
    {
        title: "Business Analytics",
        description: "In-depth insights into revenue, growth trends, teacher performance, and marketing ROI."
    }
];

export default function InstituteManagement() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Campus24by7 Institute ERP",
        "applicationCategory": "EducationalBusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "description": "Specialized ERP for coaching centers and vocational institutes to manage batches, leads, and results.",
        "offers": {
            "@type": "Offer",
            "price": "4999",
            "priceCurrency": "INR"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ManagementLayout
                title="Coaching Growth Platform"
                subtitle="Designed for High-Impact Learning Centers"
                description="Optimize your operations and scale your institute with data-driven tools built for competitive success and student achievement."
                features={instituteFeatures}
            />
        </>
    );
}
