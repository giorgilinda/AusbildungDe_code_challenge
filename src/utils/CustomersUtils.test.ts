import {
  findCustomerId,
  findCustomers,
  findJobPostings,
} from "./CustomersUtils";

//FIXME: it doesn't read env variables
describe("CustomersUtils", () => {
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
    it("should return an empty array if no jobs are found", async () => {
      const jobs = await findJobPostings(
        "8d854b65-c3dc-45c3-aec8-db144c52d47f"
      );
      expect(jobs.length).toBe(0);
    });
  });
});
