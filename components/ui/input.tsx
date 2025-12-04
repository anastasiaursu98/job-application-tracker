import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  error,
  ...props
}: React.ComponentProps<"input"> & { error?: string | boolean }) {
  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        aria-invalid={!!error}
        className={cn(
          "file:text-foreground placeholder:text-gray-500 selection:bg-primary selection:text-primary-foreground dark:bg-white border-input h-10 w-full min-w-0 rounded-md border bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          className,
          error
            ? "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
            : ""
        )}
        {...props}
      />
      {error && typeof error === "string" && (
        <p className="text-sm text-destructive mt-2">{error}</p>
      )}
    </div>
  );
}

export { Input };
