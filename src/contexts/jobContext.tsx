"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { JobType } from "@/utils/CustomersUtils";
import { JobContext } from "@/hooks/useJobContext";

export type JobContextType = {
  job: JobType | null;
  saveJob: (job: JobType) => void;
};

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [job, setJob] = useState<JobType | null>(null);

  const saveJob = (newJob: JobType) => {
    setJob(newJob);
  };

  return <JobContext value={{ job, saveJob }}>{children}</JobContext>;
};
