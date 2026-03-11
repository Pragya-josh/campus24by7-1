import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { identifier, password } = body;

        // Hardcoded admin login
        if (identifier === "admin@admin.com" && password === "admin123") {
            return NextResponse.json({
                success: true,
                data: {
                    token: "mock-admin-token-12345",
                    user: { id: "1", name: "Admin User", email: "admin@admin.com", role: "ADMIN" }
                }
            }, { status: 200 });
        }

        // Hardcoded user login
        if (identifier === "user@user.com" && password === "user123") {
            return NextResponse.json({
                success: true,
                data: {
                    token: "mock-user-token-12345",
                    user: { id: "2", name: "Regular User", email: "user@user.com", role: "USER" }
                }
            }, { status: 200 });
        }

        return NextResponse.json({
            success: false,
            message: "Invalid email or password"
        }, { status: 401 });

    } catch (error: any) {
        console.error("Login Error:", error.message);
        return NextResponse.json({
            success: false,
            message: "An internal error occurred during login."
        }, { status: 500 });
    }
}
