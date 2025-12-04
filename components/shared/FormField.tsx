"use client";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { AlertCircle, Check } from "lucide-react";
import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  success?: boolean;
  hint?: string;
  required?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  error,
  success,
  hint,
  required,
  icon,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      <Label
        htmlFor={htmlFor}
        className="text-sm font-medium text-gray-700 flex items-center gap-1.5"
      >
        {icon && <span className="text-gray-500">{icon}</span>}
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </Label>

      {/* Input Container */}
      <div className="relative">
        {children}

        {/* Success/Error Icon */}
        {(success || error) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {success && <Check className="w-5 h-5 text-green-500" />}
            {error && <AlertCircle className="w-5 h-5 text-red-500" />}
          </div>
        )}
      </div>

      {/* Hint or Error Message */}
      {(hint || error) && (
        <p
          className={cn(
            "text-xs flex items-start gap-1 animate-slide-up",
            error ? "text-red-600 font-medium" : "text-gray-500"
          )}
          role={error ? "alert" : undefined}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
}
