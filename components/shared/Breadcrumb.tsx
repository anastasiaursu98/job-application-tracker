"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2", className)}>
            <ol className="flex items-center gap-2 text-sm">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && (
                                <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                            )}

                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors duration-200"
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            ) : (
                                <span
                                    className={cn(
                                        "flex items-center gap-1.5",
                                        isLast
                                            ? "text-gray-900 font-medium"
                                            : "text-gray-600"
                                    )}
                                    aria-current={isLast ? "page" : undefined}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
