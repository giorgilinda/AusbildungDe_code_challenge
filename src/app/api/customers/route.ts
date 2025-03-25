import { api } from "../config/axiosConfigs";

export type CustomerType = {
  id: string;
  slug: string;
  name: string;
  description: string;
  customer_status: string;
  email: string;
  founding_year: number;
  employee_count: number;
};

export const CustomerAPI = {
  getAll: async () => {
    console.log("🪳", "getAll");
    const response = await api.request({
      url: "/customers",
      method: "GET",
    });
    console.log("🪳", { response });
    return response.data;
  },
  get: async (id: string) => {
    const response = await api.request({
      url: `/customers/${id}`,
      method: "GET",
    });

    return response.data;
  },
  create: async function (customer: CustomerType) {
    await api.request({
      url: `/customers`,
      method: "POST",
      data: customer,
    });
  },
  update: async function (customer: CustomerType) {
    await api.request({
      url: `/customers/${customer.id}`,
      method: "PATCH",
      data: customer,
    });
  },
  delete: async function (id: string) {
    await api.request({
      url: `/customers/${id}`,
      method: "DELETE",
    });
  },
};
