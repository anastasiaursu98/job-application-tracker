import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function PageHeader({
  title,
  description,
  titleClassName,
  descriptionClassName,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div className={cn("", className)} {...props}>
      <h1
        className={cn(
          "text-2xl leading-tight font-semibold text-gray-900",
          titleClassName
        )}
      >
        {title}
      </h1>
      {description && (
        <p className={cn("text-md text-gray-500 mt-2", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
