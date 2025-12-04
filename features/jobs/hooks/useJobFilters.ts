import { useState, useMemo } from "react";
import { Job } from "../types/job";
import { JobDropdown, JobFilter } from "../types/job";

interface UseJobFiltersProps {
  jobs: Job[];
}
export function useJobFilters({ jobs }: UseJobFiltersProps) {
  const [filters, setFilters] = useState<JobFilter>({
    search: "",
    status: [],
    types: [],
    locations: [],
    categories: [],
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchTitle = job.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchStatus =
        filters.status.length === 0 ||
        filters.status.some((s) => s.value === job.status.value);
      const matchTypes =
        filters.types.length === 0 ||
        filters.types.some((t) => t.value === job.type.value);
      const matchLocations =
        filters.locations.length === 0 ||
        filters.locations.some((l) => l.value === job.location.value);

      return matchTitle && matchStatus && matchTypes && matchLocations;
    });
  }, [filters, jobs]);

  const handleSearch = (value: string) => {
    setFilters({ ...filters, search: value });
  };
  const handleFiltersSelect = (
    name: string,
    selectedValues: string[],
    filterArray: JobDropdown[]
  ) => {
    setFilters({
      ...filters,
      [name]: selectedValues.map(
        (value) =>
          filterArray.find((filter) => filter.value === value) as JobDropdown
      ) as JobDropdown[],
    });
  };

  return {
    filters,
    filteredJobs,
    handleSearch,
    setFilters,
    handleFiltersSelect,
  };
}
