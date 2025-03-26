import { findCustomer, findJobPostings } from "./CustomersUtils";

// FIXME: run the tests
describe("CustomersUtils", () => {
  describe("findCustomers function", () => {
    it("should find all customers if not filters passed", () => {
      expect(findCustomer().length).toBe(3);
    });

    it("should find one customer based on the id", () => {
      expect(
        findCustomer("8d854b65-c3dc-45c3-aec8-db144c52d47e").length
      ).toBeGreaterThan(0);
    });
  });

  describe("findJobPostings function", () => {
    it("should find all jobs based on the customer", () => {
      expect(
        findJobPostings("8d854b65-c3dc-45c3-aec8-db144c52d47e").length
      ).toBeGreaterThan(0);
    });
    it("should return an empty array if no jobs are found", () => {
      expect(
        findJobPostings("8d854b65-c3dc-45c3-aec8-db144c52d47f").length
      ).toBe(0);
    });
  });
});
