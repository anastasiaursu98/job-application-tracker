import { FormField } from "@/components/shared/FormField";
import { Dropdown } from "@/components/shared/Dropdown";
import { DatePicker } from "@/components/shared/DatePicker";
import {
    jobCategory,
    jobLocation,
    jobStatus,
    jobType,
} from "@/features/jobs/constnats/list";
import { Briefcase, Calendar, MapPin, Layers, Target } from "lucide-react";

interface JobApplicationMetadataProps {
    status: string;
    type: string;
    location: string;
    category: string;
    appliedDate: Date;
    onDropdownChange: (name: string, value: string) => void;
    onDateChange: (date: Date | null) => void;
}

export function JobApplicationMetadata({
    status,
    type,
    location,
    category,
    appliedDate,
    onDropdownChange,
    onDateChange,
}: JobApplicationMetadataProps) {
    return (
        <section className="space-y-4">
            {/* Section Header */}
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-heading-md text-gray-900">Application Details</h2>
            </div>

            {/* Status, Type, Location, Category Fields */}
            <div className="grid-responsive-form">
                <FormField
                    label="Application Status"
                    htmlFor="status"
                    required
                    icon={<Layers className="h-4 w-4" />}
                >
                    <Dropdown
                        id="status"
                        options={jobStatus}
                        value={status}
                        onChange={(value) => onDropdownChange("status", value)}
                        placeholder="Select current status"
                    />
                </FormField>

                <FormField
                    label="Job Type"
                    htmlFor="type"
                    required
                    icon={<Briefcase className="h-4 w-4" />}
                >
                    <Dropdown
                        id="type"
                        options={jobType}
                        value={type}
                        onChange={(value) => onDropdownChange("type", value)}
                        placeholder="Select job type"
                    />
                </FormField>

                <FormField
                    label="Location"
                    htmlFor="location"
                    required
                    icon={<MapPin className="h-4 w-4" />}
                >
                    <Dropdown
                        id="location"
                        options={jobLocation}
                        value={location}
                        onChange={(value) => onDropdownChange("location", value)}
                        placeholder="Select location"
                    />
                </FormField>

                <FormField
                    label="Category"
                    htmlFor="category"
                    required
                    icon={<Layers className="h-4 w-4" />}
                >
                    <Dropdown
                        id="category"
                        options={jobCategory}
                        value={category}
                        onChange={(value) => onDropdownChange("category", value)}
                        placeholder="Select category"
                    />
                </FormField>
            </div>

            {/* Applied Date Field */}
            <FormField
                label="Applied Date"
                htmlFor="appliedDate"
                required
                icon={<Calendar className="h-4 w-4" />}
                hint="Select the date you submitted your application"
            >
                <DatePicker
                    value={appliedDate}
                    onChange={onDateChange}
                    placeholder="Select application date"
                    format="DD/MM/YYYY"
                />
            </FormField>
        </section>
    );
}
