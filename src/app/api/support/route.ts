import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        return NextResponse.json({
            success: true,
            data: [
                {
                    id: "ticket-1",
                    subject: "Need help with admission module",
                    status: "OPEN",
                    createdAt: new Date().toISOString()
                }
            ],
            note: "Mocked locally"
        }, { status: 200 });

    } catch (error: any) {
        console.error("Tickets Proxy Error:", error.message);
        return NextResponse.json(
            {
                success: false,
                message: "Aivora-ecosystem support service is unreachable. Please ensure the backend is running."
            },
            { status: 503 }
        );
    }
}
