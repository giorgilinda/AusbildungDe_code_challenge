"use client";

import { CustomerDetails } from "@/app/(components)/CustomerDetails";
import { useCustomerContext } from "@/hooks/useCustomerContext";
import {
  CustomerType,
  findCustomerId,
  findJobPostings,
  JobType,
} from "@/utils/CustomersUtils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./ClientWrapper.module.css";
import { JobTable } from "@/app/(components)/(JobTable)/JobTable";

type ClientWrapperProps = {
  id: string;
};

const ClientWrapper: React.FC<ClientWrapperProps> = ({ id }) => {
  const { customer, saveCustomer } = useCustomerContext();
  const router = useRouter();
  const [data, setData] = useState<CustomerType>(customer);
  const [jobs, setJobs] = useState<JobType[]>([]);

  useEffect(() => {
    (async function () {
      if (!data || Object.keys(data).length === 0) {
        const c = await findCustomerId(id);
        setData(c);
        saveCustomer(c);
      }
      setJobs(await findJobPostings(id));
    })();
  }, [data, id, saveCustomer]);

  const buttonClickHandler = () => {
    router.push("/");
  };

  return (
    <>
      <button type="button" onClick={buttonClickHandler}>
        Back to customer list
      </button>
      <h1 data-testid="customerDetailsTitle">Customer details</h1>
      <div className={styles.wrapper}>
        <CustomerDetails customer={data} />
        <JobTable postings={jobs} />
      </div>
    </>
  );
};

export default ClientWrapper;
