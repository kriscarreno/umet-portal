"use server";

import { ApiResponse } from "@/types/api";
import { SearchParams } from "@/types/params";
import { Program } from "@/types/programs";
import { buildApiResponseAsync, handleApiServerError } from "@/utils/api";

export async function getPrograms(
  searchParams?: SearchParams,
  popular?: boolean
): Promise<ApiResponse<Program[]>> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}programs/${
      popular ? "?popular=true" : ""
    }${
      searchParams?.categoryId ? `?category_id=${searchParams.categoryId}` : ""
    }`,
    {
      method: "GET",
      next: {
        revalidate: 600,
        tags: ["programs"],
      },
    }
  );

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync<Program[]>(res.json());
}
