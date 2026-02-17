// Common section components and utilities

import { ReactNode } from "react";
import { SectionHeaderProps } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Reusable Section Header Component
 * Displays a consistent header across all sections
 */
export const SectionHeader = ({
  label,
  title,
  subtitle,
  highlight,
}: SectionHeaderProps) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
      {title}{" "}
      {highlight && <span className="gradient-text">{highlight}</span>}
    </h2>
    {subtitle && (
      <p className="text-lg text-muted-foreground">{subtitle}</p>
    )}
  </div>
);

/**
 * Container component for consistent section padding
 */
interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const SectionContainer = ({
  children,
  id,
  className,
}: SectionContainerProps) => (
  <section
    id={id}
    className={cn("py-20 lg:py-32", className)}
  >
    <div className="container mx-auto px-4">
      {children}
    </div>
  </section>
);

/**
 * Grid container for features, modules, etc.
 */
interface GridProps {
  children: ReactNode;
  columns?: "2" | "3" | "4" | "5";
  className?: string;
}

export const ResponsiveGrid = ({
  children,
  columns = "3",
  className,
}: GridProps) => {
  const gridClasses = {
    "2": "sm:grid-cols-2 lg:grid-cols-2",
    "3": "sm:grid-cols-2 lg:grid-cols-3",
    "4": "sm:grid-cols-2 lg:grid-cols-4",
    "5": "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  };

  return (
    <div
      className={cn(
        "grid gap-6",
        gridClasses[columns],
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Card component for features, modules, etc.
 */
interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export const Card = ({
  children,
  className,
  interactive = true,
}: CardProps) => (
  <div
    className={cn(
      "bg-background rounded-xl p-6 border border-border transition-all duration-300",
      interactive &&
        "hover:border-primary/30 hover:shadow-card hover:-translate-y-1 group cursor-pointer",
      className
    )}
  >
    {children}
  </div>
);

/**
 * Icon wrapper component
 */
interface IconWrapperProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export const IconWrapper = ({
  children,
  className,
  interactive = true,
}: IconWrapperProps) => (
  <div
    className={cn(
      "w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4",
      interactive && "group-hover:scale-110 transition-transform",
      className
    )}
  >
    {children}
  </div>
);
