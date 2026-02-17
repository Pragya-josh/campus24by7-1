"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { APP_CONFIG } from "@/config/app.config";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join 500+ schools and colleges already using Campus24by7. Get started with a free demo today!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="xl"
              className="bg-card text-primary hover:bg-card/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
              onClick={() =>
                window.open(APP_CONFIG.links.bookSlot, "_blank")
              }
            >
              Request a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              onClick={() =>
                window.open(APP_CONFIG.links.contactWhatsApp, "_blank")
              }
            >
              <Phone className="w-5 h-5" />
              Talk to Sales
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-foreground rounded-full" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-foreground rounded-full" />
              <span>No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
