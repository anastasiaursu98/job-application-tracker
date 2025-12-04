import { Job } from "../types/job";
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

// Date options pentru dropdown-uri
export const generateDays = (): DropdownOption[] => {
  return Array.from({ length: 31 }, (_, i) => {
    const day = (i + 1).toString().padStart(2, "0");
    return { key: day, value: day, label: day };
  });
};

export const months: DropdownOption[] = [
  { key: "01", value: "01", label: "January" },
  { key: "02", value: "02", label: "February" },
  { key: "03", value: "03", label: "March" },
  { key: "04", value: "04", label: "April" },
  { key: "05", value: "05", label: "May" },
  { key: "06", value: "06", label: "June" },
  { key: "07", value: "07", label: "July" },
  { key: "08", value: "08", label: "August" },
  { key: "09", value: "09", label: "September" },
  { key: "10", value: "10", label: "October" },
  { key: "11", value: "11", label: "November" },
  { key: "12", value: "12", label: "December" },
];

export const generateYears = (
  startYear?: number,
  endYear?: number
): DropdownOption[] => {
  const currentYear = new Date().getFullYear();
  const start = startYear || currentYear - 10;
  const end = endYear || currentYear + 1;

  const years: DropdownOption[] = [];
  for (let year = end; year >= start; year--) {
    years.push({
      key: year.toString(),
      value: year.toString(),
      label: year.toString(),
    });
  }
  return years;
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Google",
    description:
      "We are looking for a software engineer with 3 years of experience in React and Node.js.",
    status: "applied",
    type: "full-time",
    location: "remote",
    category: "engineering",
    appliedDate: new Date(),
  },
];
