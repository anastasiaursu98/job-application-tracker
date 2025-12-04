import { Briefcase } from "lucide-react";

interface SidebarBrandProps {
    title?: string;
}

export function SidebarBrand({ title = "JobTracker" }: SidebarBrandProps) {
    return (
        <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            </div>
        </div>
    );
}
