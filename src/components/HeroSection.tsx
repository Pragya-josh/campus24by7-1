"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { HERO_HIGHLIGHTS } from "@/constants";
import { APP_CONFIG } from "@/config/app.config";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen gradient-hero pt-20 lg:pt-28 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-7rem)]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-md">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-foreground/80">#1 School Management ERP in India</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 tracking-tight">
              The <span className="gradient-text">Complete</span> <br className="hidden lg:block" /> Institutional ERP <br className="hidden lg:block" /> Solution
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Empower your campus with Campus24by7. Automate everything from attendance and fees to payroll and transport in one unified platform.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                variant="hero"
                size="xl"
                className="group rounded-full shadow-2xl hover:shadow-primary/20 premium-shine transition-all"
                onClick={() =>
                  window.open(APP_CONFIG.links.bookSlot, "_blank")
                }
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="group rounded-full backdrop-blur-sm border-primary/20 hover:bg-primary/5 transition-all"
                asChild
              >
                <Link href="/explore">
                  Explore Directory
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {HERO_HIGHLIGHTS.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative bg-card rounded-2xl shadow-card p-4 border border-border/50 backdrop-blur-sm"
            >
              {/* Mock Dashboard */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg shadow-lg" />
                    <div>
                      <div className="h-3 w-24 bg-primary/20 rounded-full" />
                      <div className="h-2 w-16 bg-muted-foreground/20 rounded-full mt-2" />
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
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-card rounded-lg p-4 text-center border border-border/10 shadow-sm"
                    >
                      <div className="text-lg font-black gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-card rounded-lg p-4 border border-border/10">
                  <div className="flex items-end justify-between h-24 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: 1 + (idx * 0.1) }}
                        className="flex-1 gradient-bg rounded-t-sm opacity-90"
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground text-center mt-3 uppercase tracking-widest">
                    Live Attendance Analytics
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-3 border border-border/50 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-muted-foreground tracking-tighter">Collection</div>
                  <div className="text-sm font-bold text-emerald-600">₹12.5L Today</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-3 border border-border/50 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-black text-primary">98%</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-muted-foreground tracking-tighter">Active Students</div>
                  <div className="text-sm font-bold text-foreground">Live Tracking</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
