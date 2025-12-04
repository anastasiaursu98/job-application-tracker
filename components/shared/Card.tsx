import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export type CardVariant = "default" | "elevated" | "outline" | "glass";
export type CardPadding = "sm" | "md" | "lg" | "xl";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  hover?: boolean;
  className?: string;
}

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-3 md:p-4",
  md: "p-4 md:p-6",
  lg: "p-6 md:p-8",
  xl: "p-8 md:p-10",
};

const variantClasses: Record<CardVariant, string> = {
  default: "bg-white shadow-md border border-gray-100",
  elevated: "bg-white shadow-xl border-0",
  outline: "bg-white border-2 border-gray-200 shadow-sm",
  glass: "bg-white/90 backdrop-blur-md border border-white/20 shadow-lg",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "elevated",
      padding = "lg",
      hover = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl w-full transition-all duration-300 ease-out will-change-transform",
          variantClasses[variant],
          paddingClasses[padding],
          hover && "hover:shadow-2xl hover:-translate-y-1 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
