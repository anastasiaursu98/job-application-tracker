"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import {
  jobCategory,
  jobLocation,
  jobStatus,
  jobType,
} from "@/features/jobs/constants/list";
import { Job, JobDropdown } from "@/features/jobs/types/job";
import {
  AddJobFormData,
  defaultAddJobFormData,
} from "../types/add-job-form.types";
import { useDispatch, useSelector } from "react-redux";
import { addJob, getSingleJob, updateJob } from "../store/jobSlice";
import { RootState } from "@/store/store";

interface UseJobFormProps {
  isEdit: boolean | undefined;
}
export function useJobForm({ isEdit }: UseJobFormProps) {
  const [formData, setFormData] = useState<AddJobFormData>(
    defaultAddJobFormData
  );

  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");
  const router = useRouter();

  const singleJob = useSelector((state: RootState) => state.jobs.singleJob);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit && jobId) {
      dispatch(getSingleJob(jobId));
    }
  }, [isEdit, jobId, dispatch]);

  useEffect(() => {
    if (isEdit && singleJob) {
      setFormData({
        ...singleJob,
        status: jobStatus.find(
          (status) => status.value === singleJob.status.value
        ) as JobDropdown,
        type: jobType.find(
          (type) => type.value === singleJob.type.value
        ) as JobDropdown,
        location: jobLocation.find(
          (location) => location.value === singleJob.location.value
        ) as JobDropdown,
        category: jobCategory.find(
          (category) => category.value === singleJob.category.value
        ) as JobDropdown,
      });
    }
  }, [isEdit, singleJob]);

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateDropdown = (name: string, value: string) => {
    const dropDowns = {
      status: jobStatus,
      type: jobType,
      location: jobLocation,
      category: jobCategory,
    };
    const dropDownOption = dropDowns[name as keyof typeof dropDowns]?.find(
      (option) => option.value === value
    );
    if (dropDownOption) {
      setFormData({ ...formData, [name]: dropDownOption });
    }
  };

  const updateDate = (date: Date | null) => {
    setFormData({ ...formData, appliedDate: date ?? new Date() });
  };

  const submitJob = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newJob: Job = {
      ...formData,
      id: crypto.randomUUID(),
      status: jobStatus.find(
        (status) => status.value === formData.status.value
      ) as JobDropdown,
      type: jobType.find(
        (type) => type.value === formData.type.value
      ) as JobDropdown,
      location: jobLocation.find(
        (location) => location.value === formData.location.value
      ) as JobDropdown,
      category: jobCategory.find(
        (category) => category.value === formData.category.value
      ) as JobDropdown,
      appliedDate: formData.appliedDate,
    };

    dispatch(addJob(newJob));
    router.push(ROUTES.HOME);
  };

  const updateJobAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedJob: Job = {
      ...formData,
      id: singleJob?.id ?? "",
      status: jobStatus.find(
        (status) => status.value === formData.status.value
      ) as JobDropdown,
      type: jobType.find(
        (type) => type.value === formData.type.value
      ) as JobDropdown,
      location: jobLocation.find(
        (location) => location.value === formData.location.value
      ) as JobDropdown,
      category: jobCategory.find(
        (category) => category.value === formData.category.value
      ) as JobDropdown,
      appliedDate: formData.appliedDate,
    };
    dispatch(updateJob(updatedJob));
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
    updateJobAction,
  };
}
