import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/**
 * Reusable testimonial card component
 * Displays a single testimonial with rating and author info
 */
export const TestimonialCard = ({
  testimonial,
  className,
}: TestimonialCardProps) => {
  const { name, role, institution, content, avatar, rating = 5 } = testimonial;

  return (
    <div
      className={cn(
        "bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300",
        className
      )}
    >
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-primary/20 mb-4" />

      {/* Rating Stars */}
      {rating && rating > 0 && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
      )}

      {/* Content */}
      <p className="text-foreground mb-6 leading-relaxed">
        "{content}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        {avatar && (
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
            {avatar}
          </div>
        )}

        {/* Author Details */}
        <div className="min-w-0">
          <div className="font-semibold text-foreground text-sm">
            {name}
          </div>
          <div className="text-xs text-muted-foreground">
            {role}
            {institution && `, ${institution}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
