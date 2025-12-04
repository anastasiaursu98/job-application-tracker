import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
    variant?: "pulse" | "wave";
}

export function Skeleton({ className, variant = "pulse" }: SkeletonProps) {
    return (
        <div
            className={cn(
                "bg-gray-200 rounded",
                variant === "pulse" && "animate-pulse",
                variant === "wave" && "animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200",
                className
            )}
        />
    );
}

export function JobCardSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 animate-fade-in">
            <div className="flex justify-between items-start">
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
            </div>
            <div className="flex gap-2 pt-2">
                <Skeleton className="h-8 w-20 rounded-md" />
                <Skeleton className="h-8 w-24 rounded-md" />
                <Skeleton className="h-8 w-16 rounded-md" />
            </div>
        </div>
    );
}

export function FormSkeleton() {
    return (
        <div className="space-y-6 animate-fade-in">
            <Skeleton className="h-8 w-48" />
            <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-10 w-full rounded-md" />
                    </div>
                ))}
            </div>
            <div className="flex justify-end gap-3">
                <Skeleton className="h-10 w-24 rounded-lg" />
                <Skeleton className="h-10 w-32 rounded-lg" />
            </div>
        </div>
    );
}
