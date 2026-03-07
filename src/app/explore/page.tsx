"use client";

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, GraduationCap, School, BookOpen, Send, Filter, Star, Sparkles, Building2, ChevronRight, SortAsc, SortDesc, ShieldCheck, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { APP_CONFIG } from "@/config/app.config";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Institute {
    id: string;
    name: string;
    type: string;
    category: string;
    location: string;
    state: string;
    address: string;
    rating: number;
    image: string;
    description: string;
}

export default function ExploreInstitutes() {
    const [institutes, setInstitutes] = useState<Institute[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState<string>("All");
    const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");
    const [sortBy, setSortBy] = useState<string>("Default");
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    // Claim Modal State
    const [claimModalOpen, setClaimModalOpen] = useState(false);
    const [claimingInstitute, setClaimingInstitute] = useState<Institute | null>(null);
    const [claimForm, setClaimForm] = useState({
        name: "",
        email: "",
        phone: "",
        designation: "",
        message: ""
    });
    const [isSubmittingClaim, setIsSubmittingClaim] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/data/institutes.json");
                const data = await res.json();
                setInstitutes(data);
            } catch (err) {
                console.error("Error loading institutes:", err);
                toast.error("Failed to load institutions. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const filteredInstitutes = useMemo(() => {
        return institutes.filter(inst => {
            const matchesSearch = !searchQuery ||
                inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                inst.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                inst.address.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesType = selectedType === "All" || inst.type === selectedType;
            const matchesLocation = selectedLocation === "All Locations" || inst.location === selectedLocation;

            return matchesSearch && matchesType && matchesLocation;
        }).sort((a, b) => {
            if (sortBy === "Rating (High-Low)") return b.rating - a.rating;
            if (sortBy === "Name (A-Z)") return a.name.localeCompare(b.name);
            return 0; // Default
        });
    }, [institutes, searchQuery, selectedType, selectedLocation, sortBy]);

    const locations = useMemo(() => {
        const uniqueLocations = Array.from(new Set(institutes.map(inst => inst.location))).sort();
        return ["All Locations", ...uniqueLocations];
    }, [institutes]);

    const paginatedInstitutes = filteredInstitutes.slice(0, currentPage * itemsPerPage);
    const hasMore = paginatedInstitutes.length < filteredInstitutes.length;

    const handleLoadMore = () => {
        setCurrentPage(prev => prev + 1);
    };

    const handleSendQuery = (name: string) => {
        toast.success(`Query sent to ${name}!`, {
            description: "They will contact you within 24-48 hours.",
            icon: <Sparkles className="h-4 w-4 text-primary" />,
        });
    };

    const handleClaimProfile = (inst: Institute) => {
        setClaimingInstitute(inst);
        setClaimModalOpen(true);
    };

    const submitClaim = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmittingClaim(true);

        try {
            const response = await fetch(`${APP_CONFIG.api.baseUrl}/api/lead/Leads/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    businessName: claimingInstitute?.name,
                    contactPerson: claimForm.name,
                    email: claimForm.email,
                    primaryPhone: claimForm.phone,
                    category: "Education",
                    subCategory: claimingInstitute?.type,
                    source: "PROFILE_CLAIM",
                    address: claimingInstitute?.location,
                    extraMetaDataJson: JSON.stringify({
                        designation: claimForm.designation,
                        reason: claimForm.message,
                        instituteId: claimingInstitute?.id
                    })
                })
            });

            if (response.ok) {
                toast.success("Claim Request Submitted", {
                    description: "Our admin team will verify your credentials and contact you within 48 hours."
                });
                setClaimModalOpen(false);
                setClaimForm({ name: "", email: "", phone: "", designation: "", message: "" });
            } else {
                toast.error("Submission failed. Please try again.");
            }
        } catch (error) {
            toast.error("Failed to submit claim request.");
        } finally {
            setIsSubmittingClaim(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col selection:bg-primary/10 selection:text-primary">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5">
                            <Building2 className="w-3 h-3 mr-2" />
                            Institutional Directory 2026
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Find Your Future <span className="gradient-text">Institution</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                            Discover 10,000+ top-rated schools, colleges, and coaching centers across Uttarakhand and Uttar Pradesh.
                        </p>
                    </motion.div>
                </section>

                <div className="container mx-auto px-4">
                    {/* Premium Filter Bar */}
                    <motion.div
                        className="sticky top-24 z-40 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-card/70 backdrop-blur-xl p-4 rounded-3xl border border-border/50 shadow-glow flex flex-col lg:flex-row gap-4">
                            <div className="relative flex-grow group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors w-5 h-5" />
                                <Input
                                    placeholder="Search by name, city, area..."
                                    className="pl-12 h-14 bg-background/50 border-transparent focus:border-primary/30 text-lg rounded-2xl transition-all"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <div className="flex bg-muted p-1 rounded-2xl h-14">
                                    {["All", "School", "College", "Coaching"].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => {
                                                setSelectedType(type);
                                                setCurrentPage(1);
                                            }}
                                            className={`px-6 rounded-xl text-sm font-semibold transition-all ${selectedType === type
                                                ? "bg-background text-primary shadow-sm"
                                                : "text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>

                                <Select value={selectedLocation} onValueChange={(val) => {
                                    setSelectedLocation(val);
                                    setCurrentPage(1);
                                }}>
                                    <SelectTrigger className="w-[200px] h-14 rounded-2xl border-transparent bg-muted/50 hover:bg-muted font-medium">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <SelectValue placeholder="Location" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent className="rounded-2xl border-border/50 shadow-card">
                                        {locations.map(loc => (
                                            <SelectItem key={loc} value={loc} className="rounded-lg">{loc}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="outline" className="h-14 w-14 rounded-2xl border-transparent bg-muted/50 hover:bg-muted relative">
                                            <Filter className="w-5 h-5" />
                                            {sortBy !== "Default" && <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-56 rounded-2xl shadow-card border-border/50">
                                        <DropdownMenuLabel>Sort Results</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => setSortBy("Default")} className="cursor-pointer">Default</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setSortBy("Rating (High-Low)")} className="cursor-pointer flex items-center justify-between">
                                            Rating (High-Low) <Star className="w-4 h-4 text-primary fill-current" />
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setSortBy("Name (A-Z)")} className="cursor-pointer flex items-center justify-between">
                                            Name (A-Z) <SortAsc className="w-4 h-4 text-primary" />
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results Count & Loader */}
                    <div className="flex items-center justify-between mb-8 font-medium text-muted-foreground">
                        <div>Found <span className="text-foreground font-bold">{filteredInstitutes.length.toLocaleString()}</span> results</div>
                    </div>

                    {/* Results Grid */}
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="h-[400px] rounded-3xl bg-muted animate-pulse border border-border/10" />
                            ))}
                        </div>
                    ) : paginatedInstitutes.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            layout
                        >
                            <AnimatePresence mode="popLayout">
                                {paginatedInstitutes.map((inst, idx) => (
                                    <motion.div
                                        key={inst.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    >
                                        <Card className="overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/40 bg-card active:scale-[0.98]">
                                            <div className="relative h-44 overflow-hidden bg-slate-200 group">
                                                {/* Luxury Gradient Background (Visible if img fails/loads) */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 via-white to-slate-200" />

                                                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                {(() => {
                                                    const type = (inst.type || "School").toLowerCase();
                                                    const idNum = parseInt(inst.id) || 0;

                                                    // High-Quality Architectural Unsplash IDs
                                                    const premiumIds: Record<string, string[]> = {
                                                        school: ["photo-1541339907198-e08756edd811", "photo-1523050854058-8df90110c9f1", "photo-1509062522246-3755977927d7", "photo-1546410531-bb4caa6b424d"],
                                                        college: ["photo-1498243639159-009c02b63fe5", "photo-1562774053-701939374585", "photo-1519389950473-47ba0277781c", "photo-1522071823991-b99777152413"],
                                                        coaching: ["photo-1516321318423-f06f85e504b3", "photo-1427504494785-3a9ca7044f45", "photo-1524178232363-1fb2b075b655", "photo-1513258496099-48168024adb0"]
                                                    };

                                                    const category = premiumIds[type] || premiumIds.school;
                                                    const photoId = category[idNum % category.length];
                                                    const imageUrl = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&q=85&w=800`;

                                                    return (
                                                        <img
                                                            src={imageUrl}
                                                            alt={inst.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 relative z-10"
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756edd811?q=80&w=800";
                                                            }}
                                                        />
                                                    );
                                                })()}

                                                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                                                    <Badge className="w-fit bg-primary/90 text-white backdrop-blur-md border-transparent font-bold shadow-lg text-[9px] h-5 rounded-md px-2 uppercase tracking-tighter">
                                                        {inst.category}
                                                    </Badge>
                                                </div>

                                                <div className="absolute bottom-3 right-3 z-20">
                                                    <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-foreground px-2.5 py-1 rounded-full text-[11px] font-black shadow-lg">
                                                        <Star className="w-3 h-3 text-amber-500 fill-current" />
                                                        {inst.rating}
                                                    </div>
                                                </div>
                                            </div>
                                            <CardHeader className="p-5 pb-2">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="p-1.5 bg-primary/5 rounded-lg">
                                                            {inst.type === "School" ? <School className="w-3.5 h-3.5 text-primary" /> :
                                                                inst.type === "College" ? <GraduationCap className="w-3.5 h-3.5 text-primary" /> :
                                                                    <BookOpen className="w-3.5 h-3.5 text-primary" />}
                                                        </div>
                                                        <span className="text-[10px] uppercase font-black tracking-widest text-primary/60">{inst.type}</span>
                                                    </div>
                                                    <Button variant="ghost" size="sm" className="h-6 text-[10px] rounded-full p-0 px-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/5 text-primary font-bold" onClick={() => handleClaimProfile(inst)}>
                                                        Claim Profile
                                                    </Button>
                                                </div>
                                                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-[1.2] min-h-[3rem] line-clamp-2 text-foreground/90">
                                                    {inst.name}
                                                </CardTitle>
                                                <CardDescription className="flex items-center gap-1.5 mt-2 font-bold text-muted-foreground/60 text-xs">
                                                    <MapPin className="w-3 h-3" /> {inst.location}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="p-5 pt-3">
                                                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                                                    {inst.description}
                                                </p>
                                            </CardContent>
                                            <CardFooter className="p-5 pt-0 border-t border-border/30 mt-2 bg-muted/5 group-hover:bg-primary/5 transition-colors">
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-between hover:bg-transparent group/btn p-0 h-auto py-2 font-bold text-primary"
                                                    onClick={() => handleSendQuery(inst.name)}
                                                >
                                                    Send Query
                                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                                                        <ChevronRight className="w-4 h-4" />
                                                    </div>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <div className="text-center py-32 bg-muted/10 rounded-[3rem] border-4 border-dashed border-border/30">
                            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-muted-foreground/30" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">No results matching your criteria</h3>
                            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                                We couldn't find exactly what you're looking for. Try adjusting your filters or search term.
                            </p>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => { setSearchQuery(""); setSelectedType("All"); setSelectedLocation("All Locations"); }}
                                className="rounded-full px-8"
                            >
                                Reset all filters
                            </Button>
                        </div>
                    )}

                    {hasMore && (
                        <div className="mt-20 text-center">
                            <div className="relative inline-block">
                                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full animate-pulse z-0" />
                                <Button
                                    size="xl"
                                    onClick={handleLoadMore}
                                    className="relative z-10 px-12 rounded-full h-16 shadow-soft hover:shadow-glow transition-all active:scale-95 font-bold"
                                >
                                    View More Results
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground mt-8 font-medium">
                                Showing <span className="text-foreground font-bold">{paginatedInstitutes.length}</span> of <span className="text-foreground font-bold">{filteredInstitutes.length.toLocaleString()}</span>
                            </p>
                        </div>
                    )}
                </div>
            </main>

            {/* Claim Profile Modal */}
            <Dialog open={claimModalOpen} onOpenChange={setClaimModalOpen}>
                <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-8 border-none ring-1 ring-border/50 shadow-2xl overflow-hidden bg-background">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
                    <DialogHeader className="space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>
                        <DialogTitle className="text-3xl font-black tracking-tight text-foreground">Claim Profile</DialogTitle>
                        <DialogDescription className="text-muted-foreground text-base leading-relaxed font-medium">
                            Claiming <span className="text-primary font-bold">"{claimingInstitute?.name}"</span> allows you to manage details, respond to queries, and showcase your institutional features.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={submitClaim} className="space-y-6 mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/80 pl-1">Your Name</label>
                                <Input required className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary/30" placeholder="e.g. Rahul Sharma" value={claimForm.name} onChange={e => setClaimForm({ ...claimForm, name: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/80 pl-1">Designation</label>
                                <Input required className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary/30" placeholder="e.g. Principal / Director" value={claimForm.designation} onChange={e => setClaimForm({ ...claimForm, designation: e.target.value })} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/80 pl-1">Work Email</label>
                                <Input type="email" required className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary/30" placeholder="name@institute.com" value={claimForm.email} onChange={e => setClaimForm({ ...claimForm, email: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/80 pl-1">Mobile Number</label>
                                <Input required className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary/30" placeholder="+91 9988776655" value={claimForm.phone} onChange={e => setClaimForm({ ...claimForm, phone: e.target.value })} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground/80 pl-1">Message (Optional)</label>
                            <Input className="rounded-xl h-12 bg-muted/30 border-none focus-visible:ring-primary/30" placeholder="Why are you claiming this profile?" value={claimForm.message} onChange={e => setClaimForm({ ...claimForm, message: e.target.value })} />
                        </div>
                        <DialogFooter className="pt-4">
                            <Button type="button" variant="ghost" onClick={() => setClaimModalOpen(false)} className="rounded-xl h-12 px-8 font-bold text-muted-foreground hover:bg-muted/50">Cancel</Button>
                            <Button type="submit" disabled={isSubmittingClaim} className="rounded-xl h-12 px-10 shadow-soft shadow-primary/20 hover:shadow-glow transition-all font-black uppercase tracking-widest text-xs">
                                {isSubmittingClaim ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verify & Submit Claim"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
}
