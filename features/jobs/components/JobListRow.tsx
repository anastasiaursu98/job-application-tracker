import React from "react";
import { Job } from "@/features/jobs/types/job";
import { cn } from "@/lib/utils";
import { TableRow, TableCell } from "@/components/ui/table";
import { getStatusClass } from "@/features/jobs/utils/jobUtils";
import JobListActions from "./JobListActions";

interface JobListRowProps {
  jobs: Job[];
}
export default function JobListRow({ jobs }: JobListRowProps) {
  return (
    <React.Fragment>
      {jobs.map((job: Job, index: number) => (
        <TableRow
          key={job.id}
          className={cn(
            "border-b border-gray-100 transition-colors duration-150",
            "hover:bg-gray-50"
          )}
        >
          <TableCell className="font-mono text-xs text-gray-500">
            #{index + 1}
          </TableCell>
          <TableCell className="font-semibold text-gray-900">
            {job.title}
          </TableCell>
          <TableCell className="text-gray-600 max-w-md truncate">
            {job.description}
          </TableCell>
          <TableCell className="font-medium text-gray-800">
            {job.company}
          </TableCell>
          <TableCell>
            <span
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold inline-block",
                getStatusClass(job.status.value)
              )}
            >
              {job.status.label}
            </span>
          </TableCell>
          <TableCell className="text-gray-600">{job.type.label}</TableCell>
          <TableCell className="text-gray-600">{job.location.label}</TableCell>
          <TableCell className="text-gray-600">{job.category.label}</TableCell>
          <TableCell className="text-gray-600 font-mono text-sm">
            {new Date(job.appliedDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </TableCell>
          <TableCell className="text-gray-600 font-mono text-sm">
            <JobListActions jobId={job.id} jobs={jobs} />
          </TableCell>
        </TableRow>
      ))}
    </React.Fragment>
  );
}
