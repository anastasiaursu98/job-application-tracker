"use client";
import { Card } from "@/components/shared/Card";
import { useDispatch } from "react-redux";
import JobListHeader from "./JobListHeader";
import JobListEmpty from "./JobListEmpty";
import JobListCards from "./job-list-cards/JobListCards";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { JOBS_STORAGE_KEY } from "../store/jobSlice";
import { setJobs } from "../store/jobSlice";
import JobListTable from "./job-list-table/JobListTable";

export default function JobList() {
  const [viewMode, setViewMode] = useState<"table" | "cards">("cards");
  const dispatch = useDispatch();
  const jobs = useSelector((state: RootState) => state.jobs.jobs);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const jobsFromStorage = localStorage.getItem(JOBS_STORAGE_KEY);
      if (jobsFromStorage) {
        dispatch(setJobs(JSON.parse(jobsFromStorage)));
      }
    }
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <JobListHeader
        jobs={jobs}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Content */}
      {jobs.length === 0 ? (
        <Card padding="md" variant="glass">
          <JobListEmpty />
        </Card>
      ) : viewMode === "cards" ? (
        <JobListCards jobs={jobs} />
      ) : (
        <JobListTable jobs={jobs} />
      )}
    </div>
  );
}
