import { JobContextType } from "@/contexts/jobContext";
import { createContext, useContext } from "react";

export const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};
