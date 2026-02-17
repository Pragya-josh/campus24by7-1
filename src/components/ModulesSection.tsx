import { MODULES } from "@/constants";
import {
  SectionHeader,
  SectionContainer,
} from "@/components/common";

const ModulesSection = () => {
  return (
    <SectionContainer id="modules" className="bg-background">
      <SectionHeader
        label="User Portals"
        title="Dedicated Portals for"
        highlight="Every Stakeholder"
        subtitle="Each user gets a personalized dashboard designed for their specific needs and workflows."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MODULES.map((module, index) => (
          <div
            key={index}
            className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon with gradient background */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}
            >
              <module.icon className="w-7 h-7 text-white" />
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-bold text-foreground mb-1">
              {module.title}
            </h3>
            <p className="text-sm text-primary font-medium mb-4">
              {module.subtitle}
            </p>

            {/* Features List */}
            <ul className="space-y-2">
              {module.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ModulesSection;
