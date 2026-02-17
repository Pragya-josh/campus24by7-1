import { cn } from "@/lib/utils";
"use client";

import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/config/app.config";

interface SEOCTAProps {
  variant?: "primary" | "secondary";
  className?: string;
}

/**
 * SEO-optimized CTA component with better call-to-action buttons
 * Features book demo link and sales contact link
 */
export const SEOCTA = ({ variant = "primary", className }: SEOCTAProps) => {
  return (
    <section
      className={cn(
        "py-16 px-4 sm:px-6 lg:px-8 text-center",
        variant === "primary"
          ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
          : "bg-white border-y border-gray-200",
        className
      )}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Transform Your Institution?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join hundreds of schools and colleges using Campus24by7 to streamline
          operations and improve student outcomes. Book your free demo today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.open(APP_CONFIG.links.bookSlot, "_blank")}
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg"
            aria-label="Book a free demo of Campus24by7"
          >
            📅 Book Your Free Demo
          </Button>

          <Button
            onClick={() => window.open(APP_CONFIG.links.contactWhatsApp, "_blank")}
            className={cn(
              "font-semibold px-8 py-3 rounded-lg",
              variant === "primary"
                ? "bg-white/20 hover:bg-white/30 text-white border border-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            )}
            aria-label="Contact sales team on WhatsApp"
          >
            💬 Talk to Sales
          </Button>
        </div>

        <p className="text-sm mt-6 opacity-75">
          No credit card required. Get instant access to see all features in action.
        </p>
      </div>
    </section>
  );
};

export default SEOCTA;
