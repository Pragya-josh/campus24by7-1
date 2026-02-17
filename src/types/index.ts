// Common types for the application

export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface Module {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  features: string[];
  gradient: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  institution: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  highlight?: string;
}
