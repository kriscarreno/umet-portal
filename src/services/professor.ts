"use server";

import { ApiResponse } from "@/types/api";
import { Professor } from "@/types/professors";
import { buildApiResponseAsync, handleApiServerError } from "@/utils/api";

export async function getProfessors(): Promise<ApiResponse<Professor[]>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}professors/`, {
    method: "GET",
    cache: "no-cache",
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync<Professor[]>(res.json());
}
