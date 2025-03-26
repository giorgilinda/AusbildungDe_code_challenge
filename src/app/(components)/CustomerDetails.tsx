import type { FC, PropsWithChildren } from "react";
import { CustomerType } from "@/utils/CustomersUtils";
import { CardDetails } from "./(CardDetails)/CardDetails";

type CustomerDetailsProps = {
  customer: CustomerType;
};

export const CustomerDetails: FC<PropsWithChildren<CustomerDetailsProps>> = ({
  customer,
}) => {
  const details = {
    name: customer.name,
    description: customer.description,
    status: customer.customer_status,
    details: [
      { label: "Email", value: customer.email },
      { label: "Founded", value: customer.founding_year },
      { label: "# Employees", value: customer.employee_count },
    ],
    logo: customer.logo,
  };

  return <CardDetails data={details} />;
};
