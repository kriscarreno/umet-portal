"use server";

import { ApiResponse } from "@/types/api";
import { Program } from "@/types/programs";
import { buildApiResponseAsync, handleApiServerError } from "@/utils/api";

export async function getPrograms(): Promise<ApiResponse<Program[]>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}programs/`, {
    method: "GET",
    next: {
      revalidate: 600,
      tags: ["programs"],
    },
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync<Program[]>(res.json());
}
