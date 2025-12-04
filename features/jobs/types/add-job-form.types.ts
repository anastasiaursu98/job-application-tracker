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
