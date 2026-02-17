"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
                                <p className="text-xl text-muted-foreground">
                                    Have questions about Campus24by7? Our team is here to help you revolutionize your campus management.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email Us</h3>
                                        <p className="text-muted-foreground">support@campus24by7.com</p>
                                        <p className="text-muted-foreground">sales@campus24by7.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Call Us</h3>
                                        <p className="text-muted-foreground">+91 9557172321</p>
                                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm IST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Visit Us</h3>
                                        <p className="text-muted-foreground">
                                            Dehradun, Uttarakhand<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {submitted ? (
                                    <div className="text-center py-12 space-y-4">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                            <Send className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Message Sent!</h3>
                                        <p className="text-muted-foreground">Thank you for contacting us. We will be in touch soon.</p>
                                        <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                                <Input id="firstName" placeholder="John" required />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                                <Input id="lastName" placeholder="Doe" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <Input id="email" type="email" placeholder="john@school.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                            <Input id="phone" type="tel" placeholder="+91 9999999999" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="institute" className="text-sm font-medium">Institution Name</label>
                                            <Input id="institute" placeholder="St. Mary's School" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                                            <Textarea id="message" placeholder="How can we help you?" rows={4} required />
                                        </div>
                                        <Button type="submit" className="w-full" size="lg">Send Message</Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
