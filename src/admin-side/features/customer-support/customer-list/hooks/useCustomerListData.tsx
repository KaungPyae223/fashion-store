import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useRemoveParam from "@/hooks/useRemoveParam";
import useSWR from "swr";
import { fetchColor } from "../../../../services/color";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useCustomerListData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();
  const deleteParam = useRemoveParam();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/customer-list"));
  
  const filterSearchRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/customer-list"));
    const queryParam = searchParams.get("q");
    if (queryParam) {
      filterSearchRef.current.value = queryParam;
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchColor);


  const handleFilter = throttle(() => {
    if (filterSearchRef.current.value) {
      updateParams({ q: filterSearchRef.current.value });
    } else {
      deleteParam(["q", "page"]);
    }
  }, 500);

  return {
    handleFilter,
    data,
    isLoading,
    filterSearchRef,
    error,
  };
};
