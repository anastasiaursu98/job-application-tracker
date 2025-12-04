"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SidebarBrand } from "./SidebarBrand";
import { SidebarNav } from "./SidebarNav";
import { SidebarFooterContent } from "./SidebarFooterContent";
import { mainMenuItems, bottomMenuItems } from "./menuConfig";

export function AppSidebar() {
  const handleSignOut = () => {};

  return (
    <Sidebar className="border-r border-gray-200/50 bg-white">
      {/* Header */}
      <SidebarHeader className="border-b border-gray-200/50 p-5">
        <SidebarBrand />
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent className="px-2 py-4">
        <SidebarNav items={mainMenuItems} />

        {/* Bottom Navigation */}
        <SidebarNav items={bottomMenuItems} className="mt-auto pt-6" />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-gray-200/50 p-3">
        <SidebarFooterContent onSignOut={handleSignOut} />
      </SidebarFooter>
    </Sidebar>
  );
}
