"use client";

import { Suspense } from "react";
import JobFormPage from "@/features/jobs/components/add-job/JobFormPage";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Home } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function AddJobRoute() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            label: "Dashboard",
            href: ROUTES.HOME,
            icon: <Home className="h-4 w-4" />,
          },
          { label: "Applications", href: ROUTES.HOME },
          { label: "Add New" },
        ]}
        className="mb-6"
      />

      <div className="mb-6 mt-6">
        <h1 className="text-heading-xl text-gray-600">
          Add New Job Application
        </h1>
      </div>
      <Suspense fallback={<div className="max-w-4xl mx-auto">Loading...</div>}>
        <JobFormPage />
      </Suspense>
    </div>
  );
}
