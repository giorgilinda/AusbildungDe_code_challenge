export type CustomerType = {
  id: string;
  slug: string;
  name: string;
  description: string;
  customer_status: string;
  email: string;
  founding_year: number;
  employee_count: number;
  logo: string;
};

export type JobType = {
  name: string;
  status: string;
  description: string;
  imported?: boolean;
  salary: number;
  customer: string;
};

export const findCustomers = async (func?: (d: CustomerType[]) => void) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/customers`)
    .then((response) => response.json())
    .then((d) => d as CustomerType[]);

  if (func) {
    func(data);
  }
  return data;
};

export const findCustomerId = async (id: string) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/customers?customerId=${id}`
  )
    .then((response) => response.json())
    .then((d) => d as CustomerType);

  return data;
};

export const findJobPostings = async (customerId: string) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/jobs?customerId=${customerId}`
  )
    .then((response) => response.json())
    .then((d) => d as JobType[]);

  return data;
};
