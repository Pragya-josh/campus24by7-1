import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/constants";
import {
  SectionHeader,
  SectionContainer,
} from "@/components/common";

const PricingSection = () => {
  return (
    <SectionContainer id="pricing" className="bg-background">
      <SectionHeader
        label="Pricing Plans"
        title="Simple, Transparent"
        highlight="Pricing"
        subtitle="Choose the plan that fits your institution. All plans include a 14-day free trial."
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PRICING_PLANS.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${plan.popular
              ? "border-primary shadow-glow scale-105"
              : "border-border hover:border-primary/30 hover:shadow-card"
              }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="gradient-bg text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            {/* Plan Details */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {plan.description}
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              variant={plan.popular ? "hero" : "outline"}
              size="lg"
              className="w-full"
              asChild
            >
              <Link href="/contact">{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PricingSection;
