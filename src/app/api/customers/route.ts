import { CustomerType } from "@/utils/CustomersUtils";
import { api } from "../config/axiosConfigs";

//FIXME: fix CORS error
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
