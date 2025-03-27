import { NextRequest } from "next/server";
import json from "../../../../public/feed.json";
export const revalidate = 60;

export async function GET(request: NextRequest) {
  const customerId = request.nextUrl.searchParams.get("customerId");
  const customers = json.map((data) => data.customer_data);
  const ret = customerId
    ? customers.filter((customer) => customer.id === customerId)[0]
    : customers;

  return new Response(JSON.stringify(ret), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
