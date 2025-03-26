import json from "../../public/feed.json";

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

export const findCustomer = (id?: string) => {
  const customers = json.map((data) => data.customer_data);
  if (!id) {
    return customers;
  }

  return customers.filter((item) => id && item.id === id);
};

export const findJobPostings = (id?: string) => {
  const postings = json.filter((data) =>
    data.job_postings_data.some((job) => job.customer === id)
  );

  return postings.length > 0 ? postings[0].job_postings_data : [];
};
