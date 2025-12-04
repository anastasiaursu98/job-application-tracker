"use client";

import { Card } from "@/components/shared/Card";

import { JobBasicDetails } from "./JobBasicDetails";
import { JobApplication } from "./JobApplication";
import { JobFormActions } from "./JobFormActions";
import { useJobForm } from "../../hooks/useJobForm";
import { JobDropdown } from "../../types/job";

/**
 * AddJobPage - Main page component for adding a new job application
 *
 * This component orchestrates the add job form by composing smaller,
 * focused components and delegating business logic to a custom hook.
 */
interface JobFormPageProps {
  isEdit?: boolean;
}
export default function JobFormPage({ isEdit }: JobFormPageProps) {
  const {
    formData,
    updateField,
    updateDropdown,
    updateDate,
    submitJob,
    cancelForm,
    updateJobAction,
  } = useJobForm({ isEdit });

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <Card>
        <form
          className="flex flex-col gap-8"
          onSubmit={isEdit ? updateJobAction : submitJob}
        >
          {/* Basic job information */}
          <JobBasicDetails
            title={formData.title}
            company={formData.company}
            description={formData.description}
            onFieldChange={updateField}
          />

          {/* Application metadata and details */}
          <JobApplication
            status={formData.status as JobDropdown}
            type={formData.type as JobDropdown}
            location={formData.location as JobDropdown}
            category={formData.category as JobDropdown}
            appliedDate={formData.appliedDate}
            onDropdownChange={updateDropdown}
            onDateChange={updateDate}
          />

          {/* Form action buttons */}
          <JobFormActions onCancel={cancelForm} isEdit={isEdit} />
        </form>
      </Card>
    </div>
  );
}
