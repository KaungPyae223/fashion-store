import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useSWR, { mutate } from "swr";
import { fetchCustomer_Support } from "../../../../services/customer_support";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useCustomerQuestionsData = () => {
  const AddParamsToURL = useAddParamsToURL();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/questions"));

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/questions"));
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchCustomer_Support);

  const handleRevalidate = async () => {
    await mutate(fetchUrl);
  };

  return {
    handleRevalidate,
    data,
    isLoading,
    error,
  };
};
