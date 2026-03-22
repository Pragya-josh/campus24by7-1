"use client";

import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2, LockKeyhole } from "lucide-react";
import { APP_CONFIG } from "@/config/app.config";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 800));

            let result: any = { success: false, message: "Invalid email or password" };

            // Hardcoded admin login
            if (email === "admin@admin.com" && password === "admin123") {
                result = {
                    success: true,
                    data: {
                        token: "mock-admin-token-12345",
                        user: { id: "1", name: "Admin User", email: "admin@admin.com", role: "ADMIN" }
                    }
                };
            }
            // Hardcoded user login
            else if (email === "user@user.com" && password === "user123") {
                result = {
                    success: true,
                    data: {
                        token: "mock-user-token-12345",
                        user: { id: "2", name: "Regular User", email: "user@user.com", role: "USER" }
                    }
                };
            }

            if (result.success) {
                login(result.data.token, result.data.user);
                toast.success("Login successful!");
                if (result.data.user.role === "ADMIN") {
                    router.push("/admin/leads");
                } else {
                    router.push("/profile/requests");
                }
            } else {
                toast.error(result.message || "Login failed");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20 flex items-center justify-center">
                <Card className="w-full max-w-md mx-4 rounded-[2.5rem] p-4 shadow-card">
                    <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <LockKeyhole className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
                        <p className="text-muted-foreground mt-2">Log in to manage your leads or view requests.</p>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold">Email Address</label>
                                <Input
                                    type="email"
                                    placeholder="name@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold">Password</label>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                            <Button type="submit" className="w-full rounded-xl py-6 font-bold" disabled={loading}>
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
                            </Button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-dashed border-border">
                            <p className="text-xs text-center text-muted-foreground mb-4 font-medium uppercase tracking-wider">Aivora Support Ecosystem</p>
                            <Button variant="outline" className="w-full rounded-xl border-primary/20 hover:bg-primary/5 text-primary font-bold" asChild>
                                <a href="https://crm.campus24by7.com/" target="_blank" rel="noopener noreferrer">
                                    Access Support CRM →
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
