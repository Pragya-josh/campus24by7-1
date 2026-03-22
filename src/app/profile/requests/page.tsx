"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { MessageCircle, Clock, CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { APP_CONFIG } from "@/config/app.config";

export default function MyRequestsPage() {
    const { token, user } = useAuth();
    const [tickets, setTickets] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) fetchTickets();
    }, [token]);

    const fetchTickets = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            // Hardcoded mocked user support requests since backend is removed
            setTickets([
                {
                    id: "ticket-REQ-921",
                    subject: "Admission Process Inquiry",
                    status: "Open",
                    replyCount: 2,
                    createdAt: new Date().toISOString()
                },
                {
                    id: "ticket-REQ-442",
                    subject: "Invoice for Module Integration",
                    status: "Closed",
                    replyCount: 5,
                    createdAt: new Date(Date.now() - 86400000 * 3).toISOString()
                }
            ]);
        } catch (error: any) {
            toast.error(error.message || "Aivora-ecosystem backend is unreachable");
        } finally {
            setLoading(false);
        }
    };

    if (!token && !loading) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center p-4">
                    <div className="text-center max-w-md">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Clock className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">View Your Requests</h2>
                        <p className="text-muted-foreground mb-8">Please log in to track your queries and view conversation history with our support team.</p>
                        <Button asChild size="xl" className="w-full rounded-2xl font-bold">
                            <Link href="/login">Login Now</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-bold">My Requests</h1>
                        <p className="text-muted-foreground">Track all your queries and institutional support tickets.</p>
                    </div>
                    <Button variant="outline" className="rounded-xl" asChild>
                        <Link href="/contact">New Inquiry</Link>
                    </Button>
                </div>

                <div className="space-y-6">
                    {loading ? (
                        <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" /> Syncing with Aivora Hub...</div>
                    ) : tickets.length === 0 ? (
                        <div className="text-center py-20 bg-muted/20 rounded-[2.5rem] border border-dashed border-border">
                            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-xl font-bold">No Active Requests</h3>
                            <p className="text-muted-foreground mt-2">You haven't submitted any queries yet.</p>
                        </div>
                    ) : (
                        tickets.map((ticket) => (
                            <div key={ticket.id} className="glass-card p-8 rounded-[2rem] border border-border/50 hover:border-primary/30 transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <MessageCircle className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{ticket.subject}</h3>
                                            <p className="text-sm text-muted-foreground">ID: #{ticket.id.split("-")[0]}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <Badge status={ticket.status} />
                                        <span className="text-[10px] text-muted-foreground font-bold">
                                            {new Date(ticket.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-border/40">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        {ticket.replyCount} messages in thread
                                    </div>
                                    <Button size="sm" variant="ghost" className="rounded-xl font-bold hover:bg-primary/5 hover:text-primary" asChild>
                                        <Link href={`/profile/requests/detail?id=${ticket.id}`}>View Conversation →</Link>
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

const Badge = ({ status }: { status: string }) => {
    const colors = {
        Open: "bg-emerald-100 text-emerald-700 border-emerald-200",
        Closed: "bg-slate-100 text-slate-700 border-slate-200",
        Pending: "bg-amber-100 text-amber-700 border-amber-200"
    };

    return (
        <span className={`px-4 py-1 rounded-full text-[10px] uppercase font-extrabold border ${colors[status as keyof typeof colors] || "bg-blue-100 text-blue-700 border-blue-200"}`}>
            {status}
        </span>
    );
};
