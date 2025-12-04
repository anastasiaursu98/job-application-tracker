import { Card } from "@/components/shared/Card";

import { jobLocation, jobStatus, jobType } from "../constants/list";
import {
  CheckboxOption,
  DropdownCheckbox,
} from "@/components/shared/DropdownCheckbox";
import { JobDropdown, JobFilter } from "../types/job";

interface JobFiltersCardProps {
  filters: JobFilter;
  handleFiltersSelect: (
    name: string,
    values: string[],
    filter: JobDropdown[]
  ) => void;
}

export default function JobFiltersCard({
  filters,
  handleFiltersSelect,
}: JobFiltersCardProps) {
  return (
    <Card className="overflow-visible">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-visible">
        <DropdownCheckbox
          options={jobType as CheckboxOption[]}
          label="Type"
          selectedValues={filters.types.map((type) => type.value)}
          onChange={(values: string[]) => {
            handleFiltersSelect("types", values, jobType as CheckboxOption[]);
          }}
        />
        <DropdownCheckbox
          options={jobStatus as CheckboxOption[]}
          label="Status"
          selectedValues={filters.status.map((status) => status.value)}
          onChange={(values: string[]) => {
            handleFiltersSelect(
              "status",
              values,
              jobStatus as CheckboxOption[]
            );
          }}
        />
        <DropdownCheckbox
          options={jobLocation as CheckboxOption[]}
          label="Location"
          selectedValues={filters.locations.map((location) => location.value)}
          onChange={(values: string[]) => {
            handleFiltersSelect(
              "locations",
              values,
              jobLocation as CheckboxOption[]
            );
          }}
        />
      </div>
    </Card>
  );
}
