import React from "react";
import { Job } from "@/features/jobs/types/job";
import JobCard from "./JobCard";

interface JobListCardsProps {
  jobs: Job[];
}

export default function JobListCards({ jobs }: JobListCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job: Job, index: number) => (
        <JobCard key={job.id} job={job} jobs={jobs} />
      ))}
    </div>
  );
}
