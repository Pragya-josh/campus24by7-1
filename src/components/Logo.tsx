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
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const textSizeMap = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  };

  return (
    <div className={cn("flex items-center", showText && "gap-3")}>
      <img
        src="/logo.svg"
        alt="Campus24by7"
        className={cn(
          sizeMap[size],
          "flex-shrink-0",
          "bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg p-1",
          className
        )}
        loading="lazy"
      />

      {showText && (
        <span
          className={cn(
            "font-bold text-foreground whitespace-nowrap",
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
