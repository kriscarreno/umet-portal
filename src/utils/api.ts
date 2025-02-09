import { ApiError, ApiResponse } from "@/types/api";

export function formatErrorMessage(err: ApiError): string {
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
}

export const isObject = (object: unknown): object is Record<string, unknown> =>
  typeof object === "object" && object !== null && !Array.isArray(object);

export const isApiError = (error: unknown): error is ApiError => {
  if (error instanceof ApiError) return true;

  return false;
};

export const handleApiServerError = async <T>(
  response: Response
): Promise<ApiResponse<T>> => {
  try {
    const error = await response.json();
    error.error = true;
    console.log(response.url, error);
    return error;
  } catch {
    console.log(response.url, response);
    return Promise.resolve({ status: 500, error: true });
  }
};

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const buildApiResponseAsync = async <T>(
  awaitable: Promise<T>
): Promise<ApiResponse<T>> => {
  try {
    const data = await awaitable;
    return await Promise.resolve({ data, error: false, status: 200 });
  } catch (e) {
    if (isApiError(e)) {
      return { ...e, title: e.title, error: true };
    }
    return { status: 500, error: true };
  }
};

export const getErrorMessage = (error: unknown) => {
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  if (error instanceof ApiError) return error.detail;
  return error;
};
