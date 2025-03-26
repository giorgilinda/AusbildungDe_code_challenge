"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../(Card)/Card";
import styles from "./AppClientWrapper.module.css";
import { useRouter } from "next/navigation";
import { CustomerType, findCustomers } from "@/utils/CustomersUtils";
import { useCustomerContext } from "@/hooks/useCustomerContext";

export const AppClientWrapper: React.FC = () => {
  const router = useRouter();
  const [customers, setCustomers] = useState<CustomerType[]>([]);
  const { saveCustomer } = useCustomerContext();

  useEffect(() => {
    findCustomers(setCustomers);
  }, []);

  const showDetails = (c: CustomerType) => {
    saveCustomer(c);
    router.push(`/${c.id}`);
  };

  return (
    <>
      <h1 data-testid="pageTitle">Customer list</h1>
      <div className={styles.wrapper}>
        {customers.map((customer, key) => (
          <Card key={key} data={customer} buttonClickHandler={showDetails} />
        ))}
      </div>
    </>
  );
};
