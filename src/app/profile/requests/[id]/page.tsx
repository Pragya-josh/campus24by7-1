"use client";

import { useEffect, useState, use } from "react";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Send, Loader2, User, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { APP_CONFIG } from "@/config/app.config";

export default function TicketDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { token } = useAuth();
    const [ticket, setTicket] = useState<any>(null);
    const [reply, setReply] = useState("");
    const [sending, setSending] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) fetchTicket();
    }, [token, id]);

    const fetchTicket = async () => {
        try {
            const response = await fetch(`/api/support/${id}`, {
                headers: { "Authorization": `Bearer ${token}` }
            });
            const result = await response.json();
            if (response.ok) {
                setTicket(result);
            }
        } catch (error) {
            toast.error("Aivora-ecosystem backend is unreachable");
        } finally {
            setLoading(false);
        }
    };

    const handleSendReply = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!reply.trim()) return;
        setSending(true);

        try {
            const response = await fetch(`/api/support/${id}/replies`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ message: reply })
            });

            if (response.ok) {
                setReply("");
                fetchTicket();
                toast.success("Reply sent");
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Failed to send message");
            }
        } catch (error) {
            toast.error("Aivora-ecosystem backend is unreachable");
        } finally {
            setSending(false);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
    if (!ticket) return <div className="min-h-screen flex items-center justify-center">Ticket not found</div>;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-4 max-w-3xl">
                <Link href="/profile/requests" className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to Requests
                </Link>

                <div className="mb-10">
                    <h1 className="text-3xl font-bold mb-2">{ticket.subject}</h1>
                    <p className="text-muted-foreground">{ticket.description}</p>
                </div>

                <div className="space-y-6 mb-12">
                    {ticket.replies?.map((r: any) => (
                        <div key={r.id} className={`flex gap-4 ${r.role === 'ADMIN' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${r.role === 'ADMIN' ? 'bg-primary text-white' : 'bg-muted'}`}>
                                {r.role === 'ADMIN' ? <ShieldCheck className="w-5 h-5" /> : <User className="w-5 h-5" />}
                            </div>
                            <div className={`max-w-[80%] p-6 rounded-3xl ${r.role === 'ADMIN' ? 'bg-primary/5 border border-primary/20 rounded-tr-none' : 'bg-muted/30 border border-border rounded-tl-none'}`}>
                                <p className="text-sm font-bold mb-2">{r.role === 'ADMIN' ? 'Campus24by7 Support' : 'You'}</p>
                                <p className="leading-relaxed">{r.message}</p>
                                <p className="text-[10px] text-muted-foreground mt-4 font-bold">{new Date(r.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSendReply} className="relative">
                    <Textarea
                        placeholder="Type your message..."
                        className="rounded-[2rem] p-6 pr-16 bg-card border-border shadow-soft min-h-[120px] focus-visible:ring-primary"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                    />
                    <Button
                        disabled={sending || !reply.trim()}
                        className="absolute bottom-4 right-4 rounded-full w-12 h-12 p-0 shadow-glow"
                    >
                        {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    </Button>
                </form>
            </main>
            <Footer />
        </div>
    );
}
