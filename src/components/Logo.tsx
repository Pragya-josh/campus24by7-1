import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  textClassName?: string;
  variant?: "icon" | "full";
}

/**
 * Campus24by7 Logo Component
 * Displays SVG logo with optional text
 */
export const Logo = ({
  className,
  size = "md",
  showText = false,
  textClassName,
  variant = "full",
}: LogoProps) => {
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const textSizeMap = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-4xl",
  };

  return (
    <div className={cn("flex items-center", showText && "gap-3")}>
      <img
        src="/logo.png"
        alt="Campus24by7"
        className={cn(
          sizeMap[size],
          "flex-shrink-0",
          "rounded-xl shadow-lg border border-white/20 bg-white p-1",
          className
        )}
        loading="lazy"
      />

      {showText && (
        <span
          className={cn(
            "font-bold text-foreground whitespace-nowrap text-glow",
            textSizeMap[size],
            textClassName
          )}
        >
          Campus24by7
        </span>
      )}
    </div>
  );
};

export default Logo;
