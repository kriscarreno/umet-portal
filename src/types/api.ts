export interface CustomApiError {
  title?: string;
  status: number;
  detail?: string;
  extensions?: Record<string, string>;
}

export class ApiError extends Error {
  title: string;

  status: number;

  detail: string;

  extensions?: Record<string, string>;

  constructor(error: CustomApiError & object) {
    super();
    this.title = error.title ?? "";
    this.status = error.status;
    this.detail = error.detail ?? "";
    if (error.extensions) this.extensions = error.extensions;
  }

  toString() {
    return `${this.title} - ${this.status} - ${this.detail.toString()}`;
  }
}

export type ApiResponse<T> = {
  data?: T;
  error: boolean;
  status: number;
  errors?: Error[];
} & CustomApiError;

export type Error = {
  name: string;
  reason: string;
  code: string;
};

export type CookieData = {
  name: string;
  path: string;
  value: string;
  expires: string;
};
