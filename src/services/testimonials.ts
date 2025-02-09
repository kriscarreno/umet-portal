"use server";

import { ApiResponse } from "@/types/api";
import { Testimonial } from "@/types/testimonials";
import { buildApiResponseAsync, handleApiServerError } from "@/utils/api";

export async function getTestimonials(): Promise<ApiResponse<Testimonial[]>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}qualifications/`, {
    method: "GET",
    cache: "no-cache",
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync<Testimonial[]>(res.json());
}
