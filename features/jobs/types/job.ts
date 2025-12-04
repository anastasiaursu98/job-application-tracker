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

export type Job = {
  id: string;
  title: string;
  description: string;
  status: JobStatus;
  type: JobType;
  location: JobLocation;
  category: JobCategory;
  company: string;
  appliedDate: Date;
};
