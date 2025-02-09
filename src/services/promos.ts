"use server";

import { ApiResponse } from "@/types/api";
import { Promo } from "@/types/promos";
import { buildApiResponseAsync, handleApiServerError } from "@/utils/api";

export async function getPromos(): Promise<ApiResponse<Promo[]>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}promos/`, {
    method: "GET",
    next: {
      revalidate: 600,
      tags: ["promos"],
    },
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync<Promo[]>(res.json());
}
