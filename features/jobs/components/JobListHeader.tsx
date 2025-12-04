import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { Job } from "../types/job";
import JobListViewToggle from "./JobListViewToggle";
import { PageHeader } from "@/components/shared/PageHeader";
interface JobListHeaderProps {
  jobs: Job[];
  viewMode: "table" | "cards";
  setViewMode: (mode: "table" | "cards") => void;
}

export default function JobListHeader({
  jobs,
  viewMode,
  setViewMode,
}: JobListHeaderProps) {
  const router = useRouter();

  const handleOpenModal = () => {
    router.push(ROUTES.ADD_JOB);
  };
  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center justify-between w-full">
        <PageHeader
          title="Job Applications"
          description="Track and manage your job application journey"
        />
        <Button
          onClick={handleOpenModal}
          className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2 shadow-lg hover:shadow-xl"
        >
          <Plus className="h-4 w-4" />
          Add New Job
        </Button>
      </div>
      <JobListViewToggle
        jobs={jobs}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
    </div>
  );
}
