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
import { tableHeaders } from "@/features/constnats/list";
import { Job } from "@/features/types/job";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constnats/routes";
import { useRouter } from "next/navigation";
import { useJobStore } from "@/features/store/jobStore";

export default function JobList() {
  const router = useRouter();

  const { jobs } = useJobStore();
  const handleOpenModal = () => {
    router.push(ROUTES.ADD_JOB);
  };
  return (
    <>
      <div className="flex justify-end mb-6">
        <Button onClick={handleOpenModal}>Add New Job</Button>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableHead key={header.title}>{header.title}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="strip-odd:bg-muted">
            {jobs.map((job: Job) => (
              <TableRow key={job.id}>
                <TableCell>{job.id}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.description}</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.status}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.category}</TableCell>
                <TableCell>{job.appliedDate.toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
