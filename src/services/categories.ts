"use server";

import { ApiResponse } from "@/types/api";
import { Category } from "@/types/categories";
import { buildApiResponseAsync, handleApiServerError } from "@/utils/api";

export async function getCategories(): Promise<ApiResponse<Category[]>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}categories/`, {
    method: "GET",
    cache: "no-cache",
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync<Category[]>(res.json());
}
