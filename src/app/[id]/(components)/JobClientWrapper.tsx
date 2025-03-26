"use client";

import { notFound, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useJobContext } from "@/hooks/useJobContext";
import { CardDetails } from "@/app/(components)/(CardDetails)/CardDetails";

const JobClientWrapper: React.FC = () => {
  const { job } = useJobContext();
  const router = useRouter();

  const CHECK_MARK = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current text-[#3ec099]"
    >
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
  );
  const CROSS_MARK = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current text-[#3ec099]"
    >
      <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
    </svg>
  );

  useEffect(() => {
    if (!job) {
      notFound();
    }
  }, [job]);

  const details = {
    name: job?.name ?? "",
    description: job?.description ?? "",
    status: job?.status ?? "",
    details: [
      { label: "Salary", value: job?.salary ?? 0 },
      { label: "Imported", value: job?.imported ? CHECK_MARK : CROSS_MARK },
    ],
  };

  const buttonClickHandler = () => {
    router.push(`/${job?.customer}`);
  };

  return (
    <div>
      <button type="button" onClick={buttonClickHandler}>
        Back to customer
      </button>
      <h1>Job details</h1>
      <CardDetails data={details} />
    </div>
  );
};

export default JobClientWrapper;
