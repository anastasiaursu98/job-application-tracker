import { FormField } from "@/components/shared/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Building2, FileText } from "lucide-react";
import { FormErrors } from "../../types/add-job-form.types";

interface JobBasicDetailsProps {
  title: string;
  company: string;
  description: string;
  errors?: FormErrors;
  onFieldChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function JobBasicDetails({
  title,
  errors,
  company,
  description,
  onFieldChange,
}: JobBasicDetailsProps) {
  console.log("errors", errors);
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
        <Briefcase className="h-5 w-5 text-brand-primary" />
        <h2 className="text-heading-md text-gray-700">Basic Information</h2>
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
            error={errors?.title}
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
            error={errors?.company}
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
          rows={8}
          className="resize-none transition-all duration-200 focus:shadow-md"
        />
      </FormField>
    </section>
  );
}
