"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { HERO_HIGHLIGHTS } from "@/constants";
import { APP_CONFIG } from "@/config/app.config";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-20 lg:pt-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-7rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              #1 School Management ERP in India
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up">
              Manage Your Institution{" "}
              <span className="gradient-text">Smarter & Faster</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up">
              All-in-one ERP solution for schools, colleges & institutes. Automate attendance, fees, payroll, transport & more — all in one powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up">
              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() =>
                  window.open(APP_CONFIG.links.bookSlot, "_blank")
                }
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up">
              {HERO_HIGHLIGHTS.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-float">
            <div className="relative bg-card rounded-2xl shadow-card p-4 border border-border">
              {/* Mock Dashboard */}
              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg" />
                    <div>
                      <div className="h-3 w-24 bg-primary/20 rounded" />
                      <div className="h-2 w-16 bg-muted-foreground/20 rounded mt-2" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10" />
                    <div className="w-8 h-8 rounded-lg bg-accent/10" />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Students", value: "2,847", color: "bg-primary" },
                    { label: "Teachers", value: "156", color: "bg-accent" },
                    { label: "Revenue", value: "₹45L", color: "bg-primary" },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-card rounded-lg p-4 text-center">
                      <div className={`text-lg font-bold gradient-text`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-card rounded-lg p-4">
                  <div className="flex items-end justify-between h-24 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, idx) => (
                      <div
                        key={idx}
                        className="flex-1 gradient-bg rounded-t opacity-80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground text-center mt-2">
                    Weekly Attendance
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card p-3 border border-border animate-scale-in">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-medium">Fee Collected</div>
                  <div className="text-sm font-bold text-accent">₹12.5L Today</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-3 border border-border animate-scale-in">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">98%</span>
                </div>
                <div>
                  <div className="text-xs font-medium">Attendance</div>
                  <div className="text-sm text-muted-foreground">
                    Today's Report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
