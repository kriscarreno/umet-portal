import { useRouter, useSearchParams } from "next/navigation";

const useUrlParams = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = (_params: UrlParamsType, scroll?: boolean) => {
    const params = new URLSearchParams(searchParams);
    Object.keys(_params).forEach((key) => {
      const _d = _params[key];
      if (_d.action === "delete") {
        params.delete(key);
      }
      if (_d.action === "add") {
        params.set(key, _d.value.toString());
      }
    });

    replace(`?${params.toString()}`, { scroll: Boolean(scroll) });
  };

  return { updateSearchParams };
};

export type UrlParamsType = Record<
  string,
  { action: "add" | "delete"; value: string | number }
>;

export default useUrlParams;
