"use client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card } from "@/components/shared/Card";
import { tableHeaders } from "@/features/jobs/constnats/list";
import { Job } from "@/features/jobs/types/job";
import { useJobStore } from "@/features/jobs/store/jobStore";
import { cn } from "@/lib/utils";
import JobListHeader from "./JobListHeader";
import JobListEmpty from "./JobListEmpty";
import JobListRow from "./JobListRow";



export default function JobList() {

  const { jobs } = useJobStore();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <JobListHeader />

      {/* Table Card */}
      <Card padding="md">
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
                <JobListRow />
              </TableBody>
            </Table>
          </div>
        )}
      </Card>


    </div>
  );
}
