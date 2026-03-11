import { NextResponse } from "next/server";

// In-memory array for demo purposes (lost on server restart)
let mockLeads: any[] = [
    {
        id: "mock-1",
        businessName: "Demo School",
        contactPerson: "Jane Doe",
        primaryPhone: "+91 9999900000",
        email: "jane@demoschool.com",
        category: "School Management",
        source: "WEBSITE",
        status: "NEW",
        createdAt: new Date().toISOString()
    }
];

export async function GET(request: Request) {
    try {
        return NextResponse.json({
            success: true,
            data: mockLeads,
            note: "Fetched from mocked memory instead of database"
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Failed to fetch leads." },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const newLead = {
            id: `mock-${Date.now()}`,
            businessName: data.businessName || "Unknown",
            contactPerson: data.contactPerson || "Anonymous",
            email: data.email || "no-email@example.com",
            primaryPhone: data.primaryPhone || "0000000000",
            category: data.category || "General",
            subCategory: data.subCategory || "",
            source: data.source || "WEBSITE",
            status: "NEW",
            extraMetaDataJson: JSON.stringify({
                message: data.message,
                originalUrl: request.url,
                fallbackTimestamp: new Date().toISOString()
            }),
            createdAt: new Date().toISOString()
        };

        // --- SIMULATE EMAIL SENDING ---
        // You can simply attach Nodemailer / Resend here later to send an actual email.
        console.log("==========================================");
        console.log("📨 SIMULATED EMAIL NOTIFICATION DISPATCH 📨");
        console.log(`To: admin@campus24by7.com`);
        console.log(`Subject: New Lead Alert - Category: ${newLead.category}`);
        console.log("Body:");
        console.log(`Hello Admin,`);
        console.log(`A new lead has been captured from the ${newLead.category} section.`);
        console.log(``);
        console.log(`**Lead Details:**`);
        console.log(`Institution: ${newLead.businessName}`);
        console.log(`Name: ${newLead.contactPerson}`);
        console.log(`Email: ${newLead.email}`);
        console.log(`Phone: ${newLead.primaryPhone}`);
        console.log(`Message: ${data.message || 'No message provided'}`);
        console.log(`Source: ${newLead.source}`);
        console.log("==========================================");

        // Store internally for demo
        mockLeads.unshift(newLead);

        return NextResponse.json({
            success: true,
            data: newLead,
            source: 'mock_email',
            note: "Saved to mock memory and simulated email sent."
        });

    } catch (error: any) {
        console.error("Critical Post Error:", error.message);
        return NextResponse.json(
            {
                success: false,
                message: "We encountered an issue saving your request. Please call us directly."
            },
            { status: 500 }
        );
    }
}
