import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    try {
        return NextResponse.json({
            success: true,
            data: {
                id: id,
                subject: `Sample Support Request #${id}`,
                description: "This is a mocked support ticket description for demonstration.",
                status: "OPEN",
                replies: [],
                createdAt: new Date().toISOString()
            },
            note: "Mocked locally"
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: "Aivora-ecosystem support service is unreachable." },
            { status: 503 }
        );
    }
}
