import ManagementLayout from "@/components/ManagementLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "College Management System - Campus24by7",
    description: "Enterprise-grade College ERP for advanced academic administration, research, and placement management.",
    alternates: {
        canonical: "/college-management",
    },
};

const collegeFeatures = [
    {
        title: "Academic Administration",
        description: "Manage complex course structures, credits, departments, and multi-disciplinary curriculums with ease."
    },
    {
        title: "Placement Cell",
        description: "Dedicated portal for placement coordination, student resumes, and corporate campus recruitment tracking."
    },
    {
        title: "Examination System",
        description: "Secure grade management, CGPA calculations, semester-wise results, and digital transcript generation."
    },
    {
        title: "Research & Projects",
        description: "Keep track of faculty research papers, patents, student projects, and institutional collaborations."
    },
    {
        title: "Library Management",
        description: "Advanced cataloging, RFID integration, automated fine calculation, and digital resource repository."
    },
    {
        title: "Hostel & Facilities",
        description: "Complete room allocation, meal planning, facility bookings, and inventory management for campus assets."
    }
];

export default function CollegeManagement() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Campus24by7 College ERP",
        "applicationCategory": "EducationalBusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "description": "Enterprise-grade College ERP for advanced academic administration, research, and placement management.",
        "offers": {
            "@type": "Offer",
            "price": "9999",
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
                title="Premium College Ecosystem"
                subtitle="Built for Higher Education Excellence"
                description="A robust, scalable ERP that connects departments, streamlines research, and enhances student placement outcomes in your institution."
                features={collegeFeatures}
                accentColor="accent"
            />
        </>
    );
}
