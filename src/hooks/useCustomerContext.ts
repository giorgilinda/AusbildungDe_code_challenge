import { CustomerContextType } from "@/contexts/customerContext";
import { createContext, useContext } from "react";

export const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined
);

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error(
      "useCustomerContext must be used within a CustomerProvider"
    );
  }
  return context;
};
