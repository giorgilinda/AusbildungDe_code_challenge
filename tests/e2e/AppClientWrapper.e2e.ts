import { expect, test } from "@playwright/test";

test.describe("AppClientWrapper", () => {
  test.describe("Index page", () => {
    test("should go to customer details page when click on button", async ({
      page,
    }) => {
      await page.goto("/");

      await expect(page.getByTestId("pageTitle")).toBeVisible();

      await page.getByTestId("customerDetailsButton").first().click();

      await expect(page.getByTestId("customerDetailsTitle")).toBeVisible();
    });
  });
});
