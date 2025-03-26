"use client";

import { CustomerDetails } from "@/app/(components)/CustomerDetails";
import { useCustomerContext } from "@/hooks/useCustomerContext";
import {
  CustomerType,
  findCustomer,
  findJobPostings,
} from "@/utils/CustomersUtils";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./ClientWrapper.module.css";
import { JobTable } from "@/app/(components)/(JobTable)/JobTable";

type ClientWrapperProps = {
  id: string;
};

const ClientWrapper: React.FC<ClientWrapperProps> = ({ id }) => {
  const { customer, saveCustomer } = useCustomerContext();
  const router = useRouter();
  const [jobs, setJobs] = useState(findJobPostings(id));

  useEffect(() => {
    if (!customer) {
      const cust = findCustomer(id);

      if (cust.length === 0 || !cust[0]) {
        notFound();
      }

      saveCustomer(cust[0] as CustomerType);
      setJobs(findJobPostings(cust[0].id));
    }
  }, [customer, id, saveCustomer]);

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
        {customer && <CustomerDetails customer={customer} />}
        {jobs && <JobTable postings={jobs} />}
      </div>
    </>
  );
};

export default ClientWrapper;
