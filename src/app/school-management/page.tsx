import ManagementLayout from "@/components/ManagementLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Management System - Campus24by7",
    description: "Premium School ERP for modern education. Manage attendance, fees, exams, and communication seamlessly.",
};

const schoolFeatures = [
    {
        title: "Student Lifecycle",
        description: "From digital admissions to alumni tracking, manage the entire student journey in one secure platform."
    },
    {
        title: "Automated Attendance",
        description: "Biometric and mobile integration with real-time SMS alerts to keep parents informed and students safe."
    },
    {
        title: "Smart Fee Collection",
        description: "Complete fee automation with online payments, custom billing cycles, and instant digital receipts."
    },
    {
        title: "Examination Hub",
        description: "Simplified exam scheduling, automated report card generation, and comprehensive academic analytics."
    },
    {
        title: "Transport & Safety",
        description: "Route optimization, real-time GPS fleet tracking, and digital attendance for every school bus trip."
    },
    {
        title: "Staff & Payroll",
        description: "Comprehensive HR management with biometric attendance, leave tracking, and automated payroll processing."
    }
];

export default function SchoolManagement() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Campus24by7 School ERP",
        "applicationCategory": "EducationalBusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "description": "Comprehensive school management system for K-12 and pre-schools. Manage admissions, fees, and exams.",
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
                title="Next-Gen School Management"
                subtitle="Trusted by 300+ Pre-Schools & K-12 Schools"
                description="Empower your faculty and engage your parents with a comprehensive ERP designed for the modern classroom. Simplify administration so you can focus on education."
                features={schoolFeatures}
            />
        </>
    );
}
