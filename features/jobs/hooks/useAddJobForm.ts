"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useJobStore } from "@/features/jobs/store/jobStore";
import { ROUTES } from "@/constnats/routes";
import {
    jobCategory,
    jobLocation,
    jobStatus,
    jobType,
} from "@/features/jobs/constnats/list";
import {
    Job,
    JobCategory,
    JobLocation,
    JobStatus,
    JobType,
} from "@/features/jobs/types/job";
import { AddJobFormData, defaultAddJobFormData } from "../types/add-job-form.types";

export function useAddJobForm() {
    const [formData, setFormData] = useState<AddJobFormData>(defaultAddJobFormData);
    const router = useRouter();
    const { addJob } = useJobStore();

    const updateField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateDropdown = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const updateDate = (date: Date | null) => {
        setFormData({ ...formData, appliedDate: date ?? new Date() });
    };

    const submitJob = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newJob: Job = {
            id: crypto.randomUUID(),
            title: formData.title,
            description: formData.description,
            company: formData.company,
            status: jobStatus.find((status) => status.value === formData.status)
                ?.label as JobStatus,
            type: jobType.find((type) => type.value === formData.type)
                ?.label as JobType,
            location: jobLocation.find(
                (location) => location.value === formData.location
            )?.label as JobLocation,
            category: jobCategory.find(
                (category) => category.value === formData.category
            )?.label as JobCategory,
            appliedDate: formData.appliedDate,
        };

        addJob(newJob);
        router.push(ROUTES.HOME);
    };

    const cancelForm = () => {
        router.back();
    };

    return {
        formData,
        updateField,
        updateDropdown,
        updateDate,
        submitJob,
        cancelForm,
    };
}
