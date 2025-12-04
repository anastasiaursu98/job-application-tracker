import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "../types/job";

export const JOBS_STORAGE_KEY = "jobs";

interface JobState {
  jobs: Job[];
  singleJob: Job | null;
}

const initialState: JobState = {
  jobs: [],
  singleJob: null,
};

// Helper function to save to localStorage
export const setJobsToStorage = (jobs: Job[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(jobs));
  }
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
    setSingleJob: (state, action: PayloadAction<Job>) => {
      state.singleJob = action.payload;
    },
    getSingleJob: (state, action: PayloadAction<string>) => {
      state.singleJob =
        state.jobs.find((job) => job.id === action.payload) || null;
    },
    addJob: (state, action: PayloadAction<Job>) => {
      state.jobs.push(action.payload);
      // Persist to localStorage
      setJobsToStorage(state.jobs);
    },
    updateJob: (state, action: PayloadAction<Job>) => {
      state.jobs = state.jobs.map((jobs) =>
        jobs.id === action.payload.id ? action.payload : jobs
      );
      setJobsToStorage(state.jobs);
    },
    deleteJob: (state, action: PayloadAction<string>) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      setJobsToStorage(state.jobs);
    },
  },
});

export const {
  setJobs,
  addJob,
  getSingleJob,
  setSingleJob,
  deleteJob,
  updateJob,
} = jobSlice.actions;
export default jobSlice.reducer;
