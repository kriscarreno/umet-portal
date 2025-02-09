import { PageProps } from "../../.next/types/app/page";

export type SearchParams = PageProps & {
  categoryId?: string;
};
