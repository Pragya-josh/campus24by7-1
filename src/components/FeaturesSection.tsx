"use client";

import { FEATURES } from "@/constants";
import {
  SectionHeader,
  SectionContainer,
  ResponsiveGrid,
  Card,
  IconWrapper,
} from "@/components/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <SectionContainer id="features" className="bg-card">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader
          label="Powerful Features"
          title="Everything You Need to"
          highlight="Run Your Institution"
          subtitle="From attendance to accounts, Campus24by7 handles it all. Save time, reduce errors, and focus on what matters — education."
        />
      </motion.div>

      <ResponsiveGrid columns="5">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full hover:shadow-glow transition-shadow border-primary/5">
              <IconWrapper className="mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </IconWrapper>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </ResponsiveGrid>

      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Button size="lg" variant="outline" className="rounded-full px-8 hover:bg-primary/5 font-bold" asChild>
          <Link href="/features">View All Features</Link>
        </Button>
      </motion.div>
    </SectionContainer>
  );
};

export default FeaturesSection;
