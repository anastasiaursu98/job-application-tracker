import { DropdownOption } from "@/components/shared/Dropdown";
export const tableHeaders = [
  { title: "ID" },
  { title: "Title" },
  { title: "Description" },
  { title: "Company" },
  { title: "Status" },
  { title: "Type" },
  { title: "Location" },
  { title: "Category" },
  { title: "Applied Date" },
];

export const jobStatus: DropdownOption[] = [
  { key: "applied", value: "applied", label: "Applied" },
  { key: "interview", value: "interview", label: "Interview" },
  { key: "offer", value: "offer", label: "Offer" },
  { key: "rejected", value: "rejected", label: "Rejected" },
];

export const jobType: DropdownOption[] = [
  { key: "full-time", value: "full-time", label: "Full-time" },
  { key: "part-time", value: "part-time", label: "Part-time" },
  { key: "contract", value: "contract", label: "Contract" },
];

export const jobLocation: DropdownOption[] = [
  { key: "remote", value: "remote", label: "Remote" },
  { key: "on-site", value: "on-site", label: "On-site" },
];

export const jobCategory: DropdownOption[] = [
  { key: "engineering", value: "engineering", label: "Engineering" },
  { key: "design", value: "design", label: "Design" },
  { key: "marketing", value: "marketing", label: "Marketing" },
];
