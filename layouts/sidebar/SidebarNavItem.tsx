"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/types/sidebar.types";

interface SidebarNavItemProps {
    item: MenuItem;
    isActive: boolean;
    onClick: () => void;
}

export function SidebarNavItem({ item, isActive, onClick }: SidebarNavItemProps) {
    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                onClick={onClick}
                isActive={isActive}
                className={cn(
                    "relative rounded-lg transition-colors duration-200",
                    "px-3 py-2.5 text-[15px] font-normal w-full",
                    isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
            >
                {/* Left accent bar for active item */}
                {isActive && (
                    <div className="absolute left-0 top-1 bottom-1 w-1 bg-primary rounded-r-full" />
                )}

                <item.icon
                    className={cn(
                        "h-5 w-5 transition-colors duration-200",
                        isActive ? "text-primary" : "text-gray-500"
                    )}
                />
                <span
                    className={cn(
                        "flex-1 transition-colors duration-200",
                        isActive && "font-medium"
                    )}
                >
                    {item.title}
                </span>
                {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-orange-100 text-orange-600 rounded-md">
                        {item.badge}
                    </span>
                )}
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}
