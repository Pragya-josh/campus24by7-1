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

const FeaturesSection = () => {
  return (
    <SectionContainer id="features" className="bg-card">
      <SectionHeader
        label="Powerful Features"
        title="Everything You Need to"
        highlight="Run Your Institution"
        subtitle="From attendance to accounts, Campus24by7 handles it all. Save time, reduce errors, and focus on what matters — education."
      />

      <ResponsiveGrid columns="5">
        {FEATURES.map((feature, index) => (
          <Card key={index}>
            <IconWrapper>
              <feature.icon className="w-6 h-6 text-primary-foreground" />
            </IconWrapper>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </Card>
        ))}
      </ResponsiveGrid>

      <div className="flex justify-center mt-12">
        <Button size="lg" variant="outline" asChild>
          <Link href="/features">View All Features</Link>
        </Button>
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
