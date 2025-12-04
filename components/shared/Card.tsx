import { cn } from "@/lib/utils";

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("bg-white rounded-xl shadow-xl p-4 md:p-6 lg:p-8 w-full max-w-full md:max-w-8xl ", className)}>
      {children}
    </div>
  );
};
