import React from "react";
import { Job } from "@/features/jobs/types/job";
import { Card } from "@/components/shared/Card";
import JobListActions from "../JobListActions";
import {
  Building2,
  MapPin,
  Calendar,
  Briefcase,
  FolderOpen,
  LucideIcon,
} from "lucide-react";
import JobCardStatus from "./JobCardStatus";
import JobDetailsItem from "./JobDetailsItem";

interface JobCardProps {
  job: Job;
  jobs: Job[];
}

interface DetailItemProps {
  icon: LucideIcon;
  children: React.ReactNode;
}

const formatAppliedDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function JobCard({ job, jobs }: JobCardProps) {
  return (
    <Card
      padding="md"
      variant="glass"
      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Header with Actions */}
      <div className="flex justify-end mb-4">
        <JobListActions jobId={job.id} jobs={jobs} />
      </div>

      {/* Title and Status */}
      <div className="flex justify-between items-center gap-3 mb-4">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 flex-1">
          {job.title}
        </h3>
        <JobCardStatus status={job.status?.value} />
      </div>

      {/* Company */}
      <div className="flex items-center gap-2 mb-3">
        <Building2 className="w-4 h-4 text-gray-500 shrink-0" />
        <span className="font-semibold text-gray-800">{job.company}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3 grow">
        {job.description}
      </p>

      {/* Job Details */}
      <div className="space-y-2 mt-auto">
        <JobDetailsItem icon={Briefcase}>{job.type?.label}</JobDetailsItem>
        <JobDetailsItem icon={MapPin}>{job.location?.label}</JobDetailsItem>
        <JobDetailsItem icon={FolderOpen}>{job.category?.label}</JobDetailsItem>
        <JobDetailsItem icon={Calendar}>
          <span className="font-mono">
            Applied: {formatAppliedDate(job.appliedDate)}
          </span>
        </JobDetailsItem>
      </div>
    </Card>
  );
}
