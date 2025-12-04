"use client";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "./SidebarNavItem";
import { MenuItem } from "@/types/sidebar.types";

interface SidebarNavProps {
    items: MenuItem[];
    className?: string;
}

export function SidebarNav({ items, className }: SidebarNavProps) {
    const router = useRouter();
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <SidebarGroup className={className}>
            <SidebarMenu className="space-y-1">
                {items.map((item) => (
                    <SidebarNavItem
                        key={item.title}
                        item={item}
                        isActive={isActive(item.path)}
                        onClick={() => router.push(item.path)}
                    />
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
