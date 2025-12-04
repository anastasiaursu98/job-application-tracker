"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "./sidebar/Sidebar";
import { cn } from "@/lib/utils";

function MainLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        {/* <Header /> */}
        <main
          className={cn(
            "flex-1 w-full overflow-y-auto max-h-screen py-8 bg-gray-100",
            "px-4 md:px-6 lg:px-8"
          )}
        >
          {children}
        </main>
      </SidebarInset>
    </>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-h-screen overflow-hidden bg-gray-100">
      <SidebarProvider>
        <MainLayoutContent>{children}</MainLayoutContent>
      </SidebarProvider>
    </div>
  );
}
