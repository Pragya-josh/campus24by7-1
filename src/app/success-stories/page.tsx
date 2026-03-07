import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { CheckCircle2, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Success Stories - Campus24by7",
    description: "Discover how Campus24by7 has transformed educational institutions across India through digital automation.",
};

const stories = [
    {
        title: "Leading K-12 School in Dehradun",
        problem: "Manual fee collection was taking 10+ days every month with frequent errors in receipts.",
        solution: "Implementation of automated online fee collection with WhatsApp reminders.",
        result: "90% of fees collected within the first 3 days of the month. Errors reduced to zero.",
        stats: "300% efficiency gain",
        icon: <TrendingUp className="w-12 h-12 text-primary" />
    },
    {
        title: "Multi-Branch Coaching Hub",
        problem: "Directors were struggling to see real-time revenue and attendance across 4 different branches.",
        solution: "Deployment of the Leadership Dashboard with branch-wise isolation and global reporting.",
        result: "Instant visibility into total revenue and staff performance across all locations.",
        stats: "100% Data Visibility",
        icon: <Users className="w-12 h-12 text-blue-500" />
    }
];

export default function SuccessStories() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
                        <p className="text-xl text-muted-foreground">
                            Real results from real institutions. See how Campus24by7 is driving digital transformation in education.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {stories.map((story, i) => (
                            <div key={i} className="glass-card p-10 rounded-[2.5rem] border border-border/50 hover:shadow-glow transition-all">
                                <div className="mb-8">{story.icon}</div>
                                <h3 className="text-2xl font-bold mb-6">{story.title}</h3>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-1 h-auto bg-red-500/20 rounded-full" />
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">The Challenge</p>
                                            <p className="text-lg">{story.problem}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-1 h-auto bg-primary/20 rounded-full" />
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Our Solution</p>
                                            <p className="text-lg">{story.solution}</p>
                                        </div>
                                    </div>

                                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                        <p className="text-xs uppercase tracking-wider text-primary font-bold mb-2">The Outcome</p>
                                        <p className="text-xl font-bold mb-2">{story.result}</p>
                                        <div className="flex items-center gap-2 text-primary font-bold">
                                            <CheckCircle2 className="w-5 h-5" />
                                            {story.stats}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 bg-foreground rounded-[3rem] p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Be Our Next Success Story</h2>
                        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                            Transform your institution's administration and provide the best experience for your students and parents.
                        </p>
                        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-glow transition-all">
                            Request Demo
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
