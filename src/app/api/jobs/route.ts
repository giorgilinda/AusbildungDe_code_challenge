import { NextRequest } from "next/server";
import json from "../../../../public/feed.json";
export const revalidate = 60;

export async function GET(request: NextRequest) {
  const customerId = request.nextUrl.searchParams.get("customerId");
  const jobs = json.filter((data) =>
    data.job_postings_data.some((job) => job.customer === customerId)
  )[0].job_postings_data;

  return Response.json(jobs);
}
