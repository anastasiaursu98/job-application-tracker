import {
    HomeIcon,
    Briefcase,
    BarChart3,
    Settings,
    HelpCircle,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { MenuItem } from "@/types/sidebar.types";

export const mainMenuItems: MenuItem[] = [

    {
        title: "Applications",
        icon: Briefcase,
        path: ROUTES.HOME,
    },
    {
        title: "Analytics",
        icon: BarChart3,
        path: "/analytics",
        badge: "Soon",
    },
];

export const bottomMenuItems: MenuItem[] = [
    {
        title: "Settings",
        icon: Settings,
        path: "/settings",
    },
    {
        title: "Help & Support",
        icon: HelpCircle,
        path: "/help",
    },
];
