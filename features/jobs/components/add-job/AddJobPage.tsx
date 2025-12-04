"use client";

import { Card } from "@/components/shared/Card";

import { JobBasicDetails } from "./JobBasicDetails";
import { JobApplicationMetadata } from "./JobApplicationMetadata";
import { JobFormActions } from "./JobFormActions";
import { useAddJobForm } from "../../hooks/useAddJobForm";

/**
 * AddJobPage - Main page component for adding a new job application
 * 
 * This component orchestrates the add job form by composing smaller,
 * focused components and delegating business logic to a custom hook.
 */
export default function AddJobPage() {
    const {
        formData,
        updateField,
        updateDropdown,
        updateDate,
        submitJob,
        cancelForm,
    } = useAddJobForm();

    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <Card>
                <form className="flex flex-col gap-8" onSubmit={submitJob}>
                    {/* Basic job information */}
                    <JobBasicDetails
                        title={formData.title}
                        company={formData.company}
                        description={formData.description}
                        onFieldChange={updateField}
                    />

                    {/* Application metadata and details */}
                    <JobApplicationMetadata
                        status={formData.status}
                        type={formData.type}
                        location={formData.location}
                        category={formData.category}
                        appliedDate={formData.appliedDate}
                        onDropdownChange={updateDropdown}
                        onDateChange={updateDate}
                    />

                    {/* Form action buttons */}
                    <JobFormActions onCancel={cancelForm} />
                </form>
            </Card>
        </div>
    );
}
