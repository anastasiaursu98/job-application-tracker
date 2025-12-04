import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import { Card } from "@/components/shared/Card";
import { Job } from "@/features/jobs/types/job";
import JobListRow from "./JobListRow";
import { tableHeaders } from "@/features/jobs/constants/list";

interface JobListTableProps {
  jobs: Job[];
}

export default function JobListTable({ jobs }: JobListTableProps) {
  return (
    <React.Fragment>
      <Card padding="md" variant="glass">
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
      </Card>
    </React.Fragment>
  );
}
