import { LogOut } from "lucide-react";

interface SidebarFooterContentProps {
    onSignOut?: () => void;
}

export function SidebarFooterContent({ onSignOut }: SidebarFooterContentProps) {
    return (
        <button
            onClick={onSignOut}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-[15px] font-normal"
        >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
        </button>
    );
}
