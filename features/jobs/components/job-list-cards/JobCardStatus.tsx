import { cn } from "@/lib/utils";
import { getStatusClass } from "@/features/jobs/utils/jobUtils";

interface JobCardStatusProps {
  status: string;
}
export default function JobCardStatus({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-block px-4 py-0.5 rounded-full text-xs font-semibold shrink-0 w-24 text-center",
        getStatusClass(status)
      )}
    >
      {status}
    </span>
  );
}
