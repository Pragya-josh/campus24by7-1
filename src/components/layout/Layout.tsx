import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper for the entire application
 */
export const MainLayout = ({ children }: MainLayoutProps) => (
  <main className="min-h-screen">{children}</main>
);

/**
 * Container with consistent max-width and padding
 */
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("container mx-auto px-4", className)}>
    {children}
  </div>
);

/**
 * Flex wrapper for common patterns
 */
interface FlexProps {
  children: ReactNode;
  direction?: "row" | "col";
  justify?: "start" | "center" | "between" | "end";
  items?: "start" | "center" | "end";
  gap?: "2" | "4" | "6" | "8";
  className?: string;
}

export const Flex = ({
  children,
  direction = "row",
  justify = "start",
  items = "center",
  gap = "4",
  className,
}: FlexProps) => {
  const directionClass = direction === "col" ? "flex-col" : "flex-row";
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    between: "justify-between",
    end: "justify-end",
  }[justify];
  const itemsClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  }[items];
  const gapClass = `gap-${gap}`;

  return (
    <div
      className={cn(
        "flex",
        directionClass,
        justifyClass,
        itemsClass,
        gapClass,
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Grid wrapper for responsive layouts
 */
interface GridLayoutProps {
  children: ReactNode;
  columns?: "1" | "2" | "3" | "4" | "5" | "6";
  gap?: "2" | "4" | "6" | "8";
  className?: string;
}

export const GridLayout = ({
  children,
  columns = "3",
  gap = "6",
  className,
}: GridLayoutProps) => (
  <div
    className={cn(
      `grid grid-cols-1 md:grid-cols-${columns} gap-${gap}`,
      className
    )}
  >
    {children}
  </div>
);
