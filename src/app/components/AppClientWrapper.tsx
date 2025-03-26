"use client";

import React, { useEffect, useState } from "react";
import json from "../../../public/feed.json";
import { Card } from "./Card";
import styles from "./AppClientWrapper.module.css";
import { useRouter } from "next/navigation";
import { CustomerType } from "@/utils/CustomersUtils";

export const AppClientWrapper: React.FC = () => {
  const router = useRouter();
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    //FIXME: call the APIs
    //CustomerAPI.getAll().then((data) => setCustomers(data));
    const data = json.map((data) => data.customer_data);
    setCustomers(data as CustomerType[]);
  }, []);

  const showDetails = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <>
      <h1>Customer list</h1>
      <div className={styles.wrapper}>
        {customers.map((customer, key) => (
          <Card key={key} data={customer} buttonClickHandler={showDetails} />
        ))}
      </div>
    </>
  );
};
