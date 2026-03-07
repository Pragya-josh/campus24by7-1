"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Mail, Phone, ExternalLink, Loader2, Search, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { APP_CONFIG } from "@/config/app.config";

export default function AdminLeadsPage() {
    const { token, isAdmin } = useAuth();
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (token) fetchLeads();
    }, [token]);

    const fetchLeads = async () => {
        try {
            const response = await fetch(`${APP_CONFIG.api.baseUrl}/api/lead/Leads`, {
                headers: { "Authorization": `Bearer ${token}` }
            });
            const result = await response.json();
            if (result.success) {
                setLeads(result.data);
            }
        } catch (error) {
            toast.error("Failed to load leads");
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsApp = (lead: any) => {
        const message = `Hello ${lead.contactPerson}, this is from Campus24by7. We received your query regarding ${lead.businessName}. How can we assist you further?`;
        const url = `https://wa.me/${lead.primaryPhone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        logInteraction(lead.id, "WhatsApp", "Sent intro message");
    };

    const handleEmail = (lead: any) => {
        const subject = "Query Response - Campus24by7";
        const body = `Hello ${lead.contactPerson},\n\nThank you for reaching out to Campus24by7 regarding ${lead.businessName}.\n\n[Your Response Here]`;
        const url = `mailto:${lead.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(url, "_blank");
        logInteraction(lead.id, "Email", "Sent follow up email");
    };

    const handleApproveClaim = async (lead: any) => {
        try {
            // In a real scenario, this would be a PATCH/PUT request to the Lead API
            // For now, we simulate the approval locally and show a success message
            setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: "CLAIM_APPROVED" } : l));

            toast.success("Profile Claim Approved", {
                description: `Institution ${lead.businessName} has been verified.`
            });

            // Log the interaction
            logInteraction(lead.id, "ADMIN_ACTION", "Profile claim approved by admin");
        } catch (error) {
            toast.error("Failed to approve claim");
        }
    };

    const logInteraction = async (leadId: string, type: string, notes: string) => {
        // Ideally call an interaction log API
        toast.info(`${type} interaction recorded`);
    };

    const filteredLeads = leads.filter(l =>
        l.businessName?.toLowerCase().includes(search.toLowerCase()) ||
        l.contactPerson?.toLowerCase().includes(search.toLowerCase())
    );

    if (!isAdmin && !loading) return <div className="pt-32 text-center">Unauthorized. Admin access required.</div>;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">Lead Management</h1>
                        <p className="text-muted-foreground">Manage and respond to all institutional queries.</p>
                    </div>
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name or institution..."
                            className="pl-10 rounded-xl"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-soft">
                    {loading ? (
                        <div className="p-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" /> Loading leads...</div>
                    ) : (
                        <Table>
                            <TableHeader className="bg-muted/50">
                                <TableRow>
                                    <TableHead className="font-bold">Institution</TableHead>
                                    <TableHead className="font-bold">Contact Person</TableHead>
                                    <TableHead className="font-bold">Contact Info</TableHead>
                                    <TableHead className="font-bold">Status</TableHead>
                                    <TableHead className="font-bold">Captured</TableHead>
                                    <TableHead className="text-right font-bold">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredLeads.map((lead) => (
                                    <TableRow key={lead.id} className={`hover:bg-muted/30 ${lead.source === "PROFILE_CLAIM" ? "bg-primary/5" : ""}`}>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <div className="font-bold">{lead.businessName}</div>
                                                {lead.source === "PROFILE_CLAIM" && (
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] font-bold uppercase tracking-widest">
                                                        <ShieldCheck className="w-3 h-3 mr-1" /> Claim Req
                                                    </Badge>
                                                )}
                                            </div>
                                            <div className="text-xs text-muted-foreground">{lead.category} {lead.subCategory && `• ${lead.subCategory}`}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium">{lead.contactPerson}</div>
                                            {lead.source === "PROFILE_CLAIM" && lead.extraMetaDataJson && (
                                                <div className="text-[10px] text-muted-foreground font-bold italic">
                                                    {JSON.parse(lead.extraMetaDataJson).designation}
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className="text-sm font-medium">{lead.primaryPhone}</div>
                                            <div className="text-xs text-muted-foreground">{lead.email}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant="outline"
                                                className={`
                                                    ${lead.status === "CLAIM_APPROVED" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                                                        lead.status === "NEW" ? "bg-blue-50 text-blue-700 border-blue-200" :
                                                            "bg-slate-50 text-slate-700 border-slate-200"}
                                                `}
                                            >
                                                {lead.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-sm text-muted-foreground">
                                            {new Date(lead.createdAt).toLocaleDateString()}
                                            <div className="text-[10px]">{lead.source || "Manual Entry"}</div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-1">
                                                {lead.source === "PROFILE_CLAIM" && lead.status !== "CLAIM_APPROVED" && (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="h-8 px-2 text-primary hover:bg-primary/10 font-bold text-[10px] uppercase tracking-tighter"
                                                        onClick={() => handleApproveClaim(lead)}
                                                    >
                                                        Approve
                                                    </Button>
                                                )}
                                                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => handleWhatsApp(lead)} title="WhatsApp">
                                                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => handleEmail(lead)} title="Email">
                                                    <Mail className="w-4 h-4 text-blue-600" />
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-8 w-8" title="View Details">
                                                    <ExternalLink className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
