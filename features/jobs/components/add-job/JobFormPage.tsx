"use client";

import { Card } from "@/components/shared/Card";

import { JobBasicDetails } from "./JobBasicDetails";
import { JobApplication } from "./JobApplication";
import { JobFormActions } from "./JobFormActions";
import { useJobForm } from "../../hooks/useJobForm";
import { JobDropdown } from "../../types/job";

interface JobFormPageProps {
  isEdit?: boolean;
}
export default function JobFormPage({ isEdit }: JobFormPageProps) {
  const {
    formData,
    errors,
    updateField,
    updateDropdown,
    updateDate,
    submitJob,
    cancelForm,
    updateJobAction,
  } = useJobForm({ isEdit });

  console.log;
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
            errors={errors}
          />

          {/* Application metadata and details */}
          <JobApplication
            status={formData.status as JobDropdown}
            type={formData.type as JobDropdown}
            location={formData.location as JobDropdown}
            category={formData.category as JobDropdown}
            appliedDate={formData.appliedDate}
            errors={errors}
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
