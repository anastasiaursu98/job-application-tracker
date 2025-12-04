"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

export function Header({ title, description, children }: HeaderProps) {
    const { toggleSidebar, isMobile } = useSidebar();

    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
            <div className="px-4 md:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Left side - Toggle & Title */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Sidebar toggle button */}
                        <button
                            type="button"
                            onClick={toggleSidebar}
                            className={cn(
                                "flex items-center justify-center h-10 w-10 rounded-lg transition-all duration-200",
                                "text-gray-600 hover:text-primary hover:bg-gray-100",
                                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                "lg:hidden" // Only show on mobile/tablet
                            )}
                            aria-label="Toggle sidebar"
                        >
                            <Menu className="h-5 w-5" />
                        </button>

                        {/* Title section */}
                        {(title || description) && (
                            <div className="flex-1 min-w-0">
                                {title && (
                                    <h1 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
                                        {title}
                                    </h1>
                                )}
                                {description && (
                                    <p className="text-sm text-gray-500 truncate mt-0.5">
                                        {description}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Center - Custom content */}
                    {children && <div className="hidden md:flex items-center">{children}</div>}

                    {/* Right side - Actions */}
                    <div className="flex items-center gap-2">
                        {/* Notifications */}
                        <button
                            type="button"
                            className="relative flex items-center justify-center h-10 w-10 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label="Notifications"
                        >
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white" />
                        </button>

                        {/* Profile */}
                        <button
                            type="button"
                            className="flex items-center justify-center h-10 w-10 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:ring-2 hover:ring-primary/20"
                            aria-label="User profile"
                        >
                            <div className="h-full w-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <User className="h-5 w-5 text-white" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
