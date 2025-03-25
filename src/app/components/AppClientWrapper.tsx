"use client";

import React, { useEffect, useState } from "react";
import { CustomerAPI, CustomerType } from "../api/customers/route";

export const AppClientWrapper: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    CustomerAPI.getAll().then((data) => setCustomers(data));
  }, []);

  console.log("🪳", { customers });

  return (
    <>
      {customers.map((customer) => (
        <div key={customer.id}>{customer.name}</div>
      ))}
    </>
  );
};
