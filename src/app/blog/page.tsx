import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Campus24by7 Insights',
    description: 'Latest updates, guides, and insights on educational technology and campus management.',
};

const blogPosts = [
    {
        slug: "future-of-school-management",
        title: "The Future of School Management Systems in 2026",
        excerpt: "Discover how AI and automation are reshaping the way educational institutions operate.",
        author: "Pragya Joshi",
        date: "Feb 12, 2026",
        category: "EdTech Trends",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        slug: "digital-transformation-colleges",
        title: "Digital Transformation Guide for Colleges",
        excerpt: "A step-by-step guide to moving your college administration to a paperless cloud system.",
        author: "Team Campus24by7",
        date: "Jan 28, 2026",
        category: "Guides",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        slug: "improving-student-engagement",
        title: "5 Way to Improve Student Engagement using Technology",
        excerpt: "Leverage mobile apps and student portals to keep students connected and engaged.",
        author: "Sarah Smith",
        date: "Jan 15, 2026",
        category: "Student Success",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 text-center mb-16">
                    <Badge className="mb-4">Our Blog</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Resources</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Stay updated with the latest trends in educational technology and campus administration.
                    </p>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    {/* Optimization: Use Next.js Image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform hover:scale-105 duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                        <Badge variant="secondary">{post.category}</Badge>
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    </div>
                                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                                </CardContent>
                                <CardFooter className="border-t pt-4">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-sm font-medium flex items-center gap-2">
                                            <User className="w-4 h-4" /> {post.author}
                                        </span>
                                        <Button variant="ghost" size="sm" asChild>
                                            <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="w-4 h-4 ml-1" /></Link>
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
