import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useSWR from "swr";
import { fetchCustomer_Support } from "../../../../services/customer_support";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useFeedbackData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/answers"));
  const filterCustomerName = useRef();
  const filterAdminName = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/answers"));
    const queryParam = searchParams;
    if (queryParam) {
      filterCustomerName.current.value = queryParam.get("customer");
      filterAdminName.current.value = queryParam.get("admin");
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchCustomer_Support);

  const handleFilter = throttle(() => {
    updateParams({
      customer: filterCustomerName.current.value,
      admin: filterAdminName.current.value,
    });
  }, 500);

  return {
    handleFilter,
    data,
    isLoading,
    filterCustomerName,
    filterAdminName,
    error,
  };
};
