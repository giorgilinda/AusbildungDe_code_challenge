import {
  findCustomerId,
  findCustomers,
  findJobPostings,
} from "./CustomersUtils";

describe("CustomersUtils", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_URL: "http://localhost:3000/",
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("findCustomers function", () => {
    it("should find all customers if not filters passed", async () => {
      const customers = await findCustomers();
      expect(customers.length).toBe(3);
    });
    it("should find one customer based on the id", async () => {
      const customer = await findCustomerId(
        "8d854b65-c3dc-45c3-aec8-db144c52d47e"
      );
      expect(customer).toBeDefined();
    });
  });

  describe("findJobPostings function", () => {
    it("should find all jobs based on the customer", async () => {
      const jobs = await findJobPostings(
        "8d854b65-c3dc-45c3-aec8-db144c52d47e"
      );
      expect(jobs.length).toBeGreaterThan(0);
    });
  });
});
