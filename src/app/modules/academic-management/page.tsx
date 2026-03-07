import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { BookOpen, Award, BarChart3, GraduationCap, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Academic & Exam Management System | Campus24by7",
    description: "Steamline your academic cycle with automated exam scheduling, report card generation, and student performance tracking.",
};

const modules = [
    { title: "Exam Scheduling", icon: ClipboardList, desc: "Create error-free timetables for exams while managing teacher invigilation automatically." },
    { title: "Smart Report Cards", icon: Award, desc: "Generate CBSE/ICSE compliant digital report cards with one click, including descriptive remarks." },
    { title: "Performance Analytics", icon: BarChart3, desc: "Visual charts for teachers and parents to track academic progress over time." }
];

export default function AcademicManagementPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-24">
                <section className="container mx-auto px-4 mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-bold mb-6">
                        <GraduationCap className="w-4 h-4" /> Academic Excellence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-8 max-w-4xl mx-auto leading-tight">
                        Power Your <span className="gradient-text">Academic Cycle</span> with Precision
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        From curriculum planning to the final result, Campus24by7 automates every step of the academic journey.
                    </p>
                </section>

                <section className="container mx-auto px-4 mb-24">
                    <div className="grid md:grid-cols-3 gap-8">
                        {modules.map((m, i) => (
                            <div key={i} className="glass-card p-10 rounded-[3rem] border border-border/50 hover:shadow-glow transition-all">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                                    <m.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                                <p className="text-lg text-muted-foreground">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-foreground text-white py-24 rounded-[4rem] mx-4">
                    <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Reduce Exam Workload by 80%</h2>
                            <p className="text-xl text-white/70 mb-10">
                                Teachers spend weeks preparing results. With Campus24by7, marks entry is done in minutes, and report cards are ready for printing instantly.
                            </p>
                            <Button size="xl" className="bg-white text-black hover:bg-white/90 rounded-full px-12 font-bold">Get a Trial</Button>
                        </div>
                        <div className="bg-white/10 p-8 rounded-[2rem] border border-white/20 aspect-video flex items-center justify-center">
                            <div className="text-center">
                                <BarChart3 className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                                <p className="text-white/50 font-medium">Performance Dashboard Preview</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
