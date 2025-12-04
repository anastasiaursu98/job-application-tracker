import { JobDropdown } from "./job";

export interface AddJobFormData {
  title: string;
  company: string;
  description: string;
  status: JobDropdown;
  type: JobDropdown;
  location: JobDropdown;
  category: JobDropdown;
  appliedDate: Date;
}

export interface FormErrors {
  title?: string;
  company?: string;
  status?: string;
  type?: string;
  location?: string;
  category?: string;
  appliedDate?: string;
}

export const ErrorMessages = {
  REQUIRED_FIELD: "This field is required.",
  INVALID_DATE: "Please enter a valid date.",
};
export const defaultAddJobFormData: AddJobFormData = {
  title: "",
  company: "",
  description: "",
  status: { key: "", value: "", label: "" },
  type: { key: "", value: "", label: "" },
  location: { key: "", value: "", label: "" },
  category: { key: "", value: "", label: "" },
  appliedDate: new Date(),
};
