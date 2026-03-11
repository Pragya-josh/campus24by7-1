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
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ identifier: email, password })
            });

            const result = await response.json();

            if (response.ok && result.success) {
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
            toast.error("Network error. Please try again.");
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
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
