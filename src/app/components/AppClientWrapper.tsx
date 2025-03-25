"use client";

import React, { useEffect, useState } from "react";
import { CustomerType } from "../api/customers/route";
import json from "../../../public/feed.json";
import { Card } from "./Card";
import styles from "./AppClientWrapper.module.css";

export const AppClientWrapper: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    //FIXME: call the APIs
    //CustomerAPI.getAll().then((data) => setCustomers(data));
    const data = json.map((data) => data.customer_data);
    setCustomers(data as CustomerType[]);
  }, []);

  return (
    <div className={styles.wrapper}>
      {customers.map((customer, key) => (
        <Card key={key} data={customer} />
      ))}
    </div>
  );
};
