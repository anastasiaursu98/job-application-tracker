"use client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import { Card } from "@/components/shared/Card";
import { tableHeaders } from "@/features/jobs/constants/list";
import { useDispatch } from "react-redux";
import JobListHeader from "./JobListHeader";
import JobListEmpty from "./JobListEmpty";
import JobListRow from "./JobListRow";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { useEffect } from "react";
import { JOBS_STORAGE_KEY } from "../store/jobSlice";
import { setJobs } from "../store/jobSlice";

export default function JobList() {
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
      <JobListHeader />

      {/* Table Card */}
      <Card padding="md" variant="glass">
        {jobs.length === 0 ? (
          <JobListEmpty />
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-gray-200">
                  {tableHeaders.map((header) => (
                    <TableHead
                      key={header.title}
                      className="font-semibold text-gray-700 py-4"
                    >
                      {header.title}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <JobListRow jobs={jobs} />
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
}
