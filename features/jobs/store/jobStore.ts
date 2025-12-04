import { create } from "zustand";
import { Job } from "../types/job";

export const JOBS_STORAGE_KEY = "jobs";

type JobStoreInterface = {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  addJob: (job: Job) => void;
};

export const setUsersToStorage = (jobs: Job[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(jobs));
  }
};
export const useJobStore = create<JobStoreInterface>((set) => ({
  jobs: [],
  setJobs: (jobs: Job[]) => set({ jobs }),
  addJob: (job: Job) => {
    set((state) => {
      const newJobs = [...state.jobs, job];
      setUsersToStorage(newJobs);
      return { jobs: newJobs };
    });
  },
}));
