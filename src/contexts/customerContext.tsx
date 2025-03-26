"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { CustomerContext } from "@/hooks/useCustomerContext";
import { CustomerType } from "@/utils/CustomersUtils";

export type CustomerContextType = {
  customer: CustomerType;
  saveCustomer: (customer: CustomerType) => void;
};

export const CustomerProvider = ({ children }: { children: ReactNode }) => {
  const [customer, setCustomer] = useState<CustomerType>({} as CustomerType);

  const saveCustomer = (newCustomer: CustomerType) => {
    setCustomer(newCustomer);
  };

  return (
    <CustomerContext value={{ customer, saveCustomer }}>
      {children}
    </CustomerContext>
  );
};
