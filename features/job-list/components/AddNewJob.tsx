"use client";
import { Card } from "@/components/shared/Card";
import { Dropdown } from "@/components/shared/Dropdown";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import {
  jobCategory,
  jobLocation,
  jobStatus,
  jobType,
} from "@/features/constnats/list";
import { DatePicker } from "@/components/shared/DatePicker";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Job,
  JobCategory,
  JobLocation,
  JobStatus,
  JobType,
} from "@/features/types/job";
import { useJobStore } from "@/features/store/jobStore";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constnats/routes";

export default function AddNewJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    status: "",
    type: "",
    location: "",
    category: "",
    appliedDate: new Date(),
  });

  const router = useRouter();
  const { addJob } = useJobStore();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, appliedDate: date ?? new Date() });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
  return (
    <div className="flex justify-center ">
      <Card className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 ">Add New Job</h2>
        <form
          className="flex flex-col justify-center gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your title"
              type="text"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Company</Label>
            <Input
              id="company"
              name="company"
              placeholder="Enter your company"
              type="text"
              value={formData.company}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter your description"
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Status</Label>
            <Dropdown
              options={jobStatus}
              value={formData.status}
              onChange={(value) => handleSelect("status", value)}
              placeholder="Select a status"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Type</Label>
            <Dropdown
              options={jobType}
              value={formData.type}
              onChange={(value) => handleSelect("type", value)}
              placeholder="Select a type"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Location</Label>
            <Dropdown
              options={jobLocation}
              value={formData.location}
              onChange={(value) => handleSelect("location", value)}
              placeholder="Select a location"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Category</Label>
            <Dropdown
              options={jobCategory}
              value={formData.category}
              onChange={(value) => handleSelect("category", value)}
              placeholder="Select a category"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Applied Date</Label>
            <DatePicker
              value={formData.appliedDate}
              onChange={handleDateChange}
              placeholder="Select application date"
              format="DD/MM/YYYY"
            />
          </div>
          <div className="flex justify-end mt-6">
            <Button type="submit">Add Job</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
