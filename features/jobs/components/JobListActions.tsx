import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { Job } from "../types/job";
import { deleteJob, setSingleJob } from "../store/jobSlice";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
interface JobListActionsProps {
  jobId: string;
  jobs: Job[];
}
export default function JobListActions({ jobId, jobs }: JobListActionsProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSelectJob = (jobId: string) => {
    const findSelectedJob: Job | undefined = jobs.find(
      (job) => job.id === jobId
    );
    if (findSelectedJob) {
      dispatch(setSingleJob(findSelectedJob));
      router.push(`${ROUTES.EDIT_JOB.replace(":id", jobId)}`);
    }
  };
  const handleDeleteJob = (jobId: string) => {
    dispatch(deleteJob(jobId));
  };
  return (
    <Popover>
      <PopoverTrigger>
        <MoreHorizontalIcon className="w-4 h-4" />
      </PopoverTrigger>
      <PopoverContent className="w-46">
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => handleSelectJob(jobId)}
            variant="link"
            size="sm"
            className="text-gray-500 text-left"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDeleteJob(jobId)}
            variant="link"
            size="sm"
            className="text-gray-500 text-left"
          >
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
