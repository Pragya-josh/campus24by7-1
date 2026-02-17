import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

type Props = {
    params: { slug: string };
};

// Mock data (in a real app, fetch from CMS or API)
const getPost = (slug: string) => {
    const posts: Record<string, any> = {
        "future-of-school-management": {
            title: "The Future of School Management Systems in 2026",
            content: `
        <p>The landscape of educational administration is undergoing a seismic shift...</p>
        <h2>AI-Driven Analytics</h2>
        <p>Artificial Intelligence is no longer just a buzzword. In 2026, school ERPs are using predictive analytics to identify at-risk students...</p>
        <h2>Cloud-Native Infrastructure</h2>
        <p>The days of local servers are gone...</p>
      `,
            author: "Pragya Joshi",
            date: "Feb 12, 2026",
            category: "EdTech Trends",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            readTime: "5 min read"
        },
        "digital-transformation-colleges": {
            title: "Digital Transformation Guide for Colleges",
            content: "Content for digital transformation...",
            author: "Team Campus24by7",
            date: "Jan 28, 2026",
            category: "Guides",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            readTime: "8 min read"
        }
    };

    return posts[slug] || null;
};

// Generate static params for static export
export async function generateStaticParams() {
    const posts = [
        "future-of-school-management",
        "digital-transformation-colleges",
        "improving-student-engagement" // Added missing slug from BlogPage
    ];

    return posts.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const post = getPost(params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Campus24by7 Blog`,
        description: `Read about ${post.title}`,
        openGraph: {
            images: [post.image],
        },
    };
}

export default function BlogPost({ params }: Props) {
    const post = getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20">
                <article className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>

                    <div className="mb-8">
                        <Badge className="mb-4">{post.category}</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b pb-8">
                            <span className="flex items-center gap-2">
                                <User className="w-5 h-5" /> {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-5 h-5" /> {post.readTime}
                            </span>
                        </div>
                    </div>

                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 bg-muted relative">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            priority
                        />
                    </div>

                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                </article>
            </main>
            <Footer />
        </div>
    );
}
