"use server";

import { ApiResponse } from "@/types/api";
import { Course } from "@/types/courses";
import { buildApiResponseAsync, handleApiServerError } from "@/utils/api";

export async function getCourses(): Promise<ApiResponse<Course[]>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}courses/`, {
    method: "GET",
    next: {
      revalidate: 600,
      tags: ["courses"],
    },
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync<Course[]>(res.json());
}
