import { NextResponse } from "next/server";

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();

    try {
        console.log(`[Mock] Received reply for ticket ${id}:`, body.message);

        return NextResponse.json({
            success: true,
            data: {
                id: `mock-reply-${Date.now()}`,
                ticketId: id,
                message: body.message,
                createdAt: new Date().toISOString()
            },
            note: "Mocked reply saved locally"
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Aivora-ecosystem support service is unreachable." },
            { status: 503 }
        );
    }
}
