import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { Job } from "../types/job";
import JobListViewToggle from "./JobListViewToggle";
import { PageHeader } from "@/components/shared/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import { FilterIcon } from "lucide-react";
import { useState } from "react";
interface JobListHeaderProps {
  jobs: Job[];
  viewMode: "table" | "cards";
  searchTerm: string;
  setViewMode: (mode: "table" | "cards") => void;
  setSearchTerm: (term: string) => void;
}

export default function JobListHeader({
  jobs,
  viewMode,
  searchTerm,
  setViewMode,
  setSearchTerm,
}: JobListHeaderProps) {
  const router = useRouter();

  const handleOpenModal = () => {
    router.push(ROUTES.ADD_JOB);
  };
  return (
    <div className="space-y-4 w-full">
      <PageHeader
        title="Job Applications"
        description="Track and manage your job application journey"
      />

      <JobListViewToggle
        jobs={jobs}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <div className="flex items-center justify-between w-full gap-6">
        <div className="w-full">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-6">
          <Button
            variant="outline-primary"
            onClick={() => {}}
            className="gap-2 w-28"
          >
            <FilterIcon className="h-4 w-4" />
            Filter
          </Button>

          <Button onClick={handleOpenModal} variant="default" className="w-28">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>
    </div>
  );
}
