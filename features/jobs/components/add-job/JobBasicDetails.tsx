import { FormField } from "@/components/shared/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Building2, FileText } from "lucide-react";

interface JobBasicDetailsProps {
    title: string;
    company: string;
    description: string;
    onFieldChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function JobBasicDetails({
    title,
    company,
    description,
    onFieldChange,
}: JobBasicDetailsProps) {
    return (
        <section className="space-y-4">
            {/* Section Header */}
            <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-heading-md text-gray-900">Basic Information</h2>
            </div>

            {/* Title & Company Fields */}
            <div className="grid-responsive-form">
                <FormField
                    label="Job Title"
                    htmlFor="title"
                    required
                    icon={<Briefcase className="h-4 w-4" />}
                >
                    <Input
                        id="title"
                        name="title"
                        placeholder="e.g. Senior Frontend Developer"
                        type="text"
                        value={title}
                        onChange={onFieldChange}
                        className="transition-all duration-200 focus:shadow-md"
                    />
                </FormField>

                <FormField
                    label="Company"
                    htmlFor="company"
                    required
                    icon={<Building2 className="h-4 w-4" />}
                >
                    <Input
                        id="company"
                        name="company"
                        placeholder="e.g. TechCorp Inc."
                        type="text"
                        value={company}
                        onChange={onFieldChange}
                        className="transition-all duration-200 focus:shadow-md"
                    />
                </FormField>
            </div>

            {/* Description Field */}
            <FormField
                label="Job Description"
                htmlFor="description"
                hint="Briefly describe the role and your reasons for applying"
                icon={<FileText className="h-4 w-4" />}
            >
                <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter job description and notes..."
                    value={description}
                    onChange={onFieldChange}
                    rows={4}
                    className="resize-none transition-all duration-200 focus:shadow-md"
                />
            </FormField>
        </section>
    );
}
