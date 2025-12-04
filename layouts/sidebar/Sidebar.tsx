import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constnats/routes";

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.push(ROUTES.HOME)}
              isActive={isActive(ROUTES.HOME)}
            >
              <HomeIcon className="w-6 h-6" />
              <span className="text-lg font-medium text-gray-700">Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
