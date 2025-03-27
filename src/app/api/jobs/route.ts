import { NextRequest } from "next/server";
import json from "../../../../public/feed.json";
import { JobType } from "@/utils/CustomersUtils";
export const revalidate = 60;

export async function GET(request: NextRequest) {
  const customerId = request.nextUrl.searchParams.get("customerId");
  let jobs = [] as JobType[];
  const res = json.filter((data) =>
    data.job_postings_data.some((job) => job.customer === customerId)
  )[0];

  if (res) {
    jobs = res.job_postings_data;
  }

  return new Response(JSON.stringify(jobs), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
