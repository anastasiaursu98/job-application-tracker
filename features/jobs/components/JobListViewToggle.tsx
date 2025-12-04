import React, { useState } from "react";
import { Job } from "../types/job";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";

interface JobListViewToggleProps {
  jobs: Job[];
  viewMode: "table" | "cards";
  setViewMode: (mode: "table" | "cards") => void;
}
export default function JobListViewToggle({
  jobs,
  viewMode,
  setViewMode,
}: JobListViewToggleProps) {
  return (
    <React.Fragment>
      {jobs.length > 0 && (
        <Tabs
          defaultValue="account"
          className="w-[400px]"
          value={viewMode}
          onValueChange={(value) => setViewMode(value as "table" | "cards")}
        >
          <TabsList className="bg-transparent p-0 h-auto gap-0">
            <TabsTrigger
              value="cards"
              className="px-4 py-2 cursor-pointer text-sm font-semibold text-gray-500 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 border-b-2 border-transparent transition-colors duration-200 focus:outline-none bg-transparent hover:bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-0 h-auto"
            >
              <LayoutGrid className="w-4 h-4" />
              Cards
            </TabsTrigger>
            <TabsTrigger
              value="table"
              className="px-4 py-2 cursor-pointer text-sm font-semibold text-gray-500 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 border-b-2 border-transparent transition-colors duration-200 focus:outline-none bg-transparent hover:bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-0 h-auto"
            >
              <List className="w-4 h-4" />
              Table
            </TabsTrigger>
          </TabsList>
        </Tabs>
      )}
    </React.Fragment>
  );
}
