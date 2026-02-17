import { TESTIMONIALS } from "@/constants";
import {
  SectionHeader,
  SectionContainer,
  ResponsiveGrid,
} from "@/components/common";
import { TestimonialCard } from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <SectionContainer id="testimonials" className="bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          label="Testimonials"
          title="Trusted by"
          highlight="Education Leaders"
          subtitle="See what school leaders say about their experience with Campus24by7."
        />

        {/* Testimonials Grid */}
        <ResponsiveGrid columns="2">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}
        </ResponsiveGrid>
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
