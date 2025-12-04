export type JobStatus = "applied" | "interview" | "offer" | "rejected";

export type JobPriority = "low" | "medium" | "high";

export type JobType = "full-time" | "part-time" | "contract" | "internship";

export type JobLocation = "remote" | "onsite" | "hybrid";

export type JobCategory =
  | "engineering"
  | "design"
  | "marketing"
  | "sales"
  | "finance"
  | "hr"
  | "legal"
  | "other";

export type JobDropdown = {
  key: string;
  value: string;
  label: string;
};
export type Job = {
  id: string;
  title: string;
  description: string;
  status: JobDropdown;
  type: JobDropdown;
  location: JobDropdown;
  category: JobDropdown;
  company: string;
  appliedDate: Date;
};

export type JobFilter = {
  search: string;
  status: JobDropdown[];
  types: JobDropdown[];
  locations: JobDropdown[];
  categories: JobDropdown[];
};
