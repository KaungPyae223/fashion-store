import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useRemoveParam from "@/hooks/useRemoveParam";
import useSWR from "swr";
import { fetchPayment } from "../../../../services/payment";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";


export const usePaymentData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();
  const deleteParam = useRemoveParam();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/payment"));
  const [openModal, setOpenModal] = useState<boolean>(false);

  const filterPaymentRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/payment"));
    const queryParam = searchParams.get("q");
    if (queryParam) {
      filterPaymentRef.current.value = queryParam;
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchPayment);


  const handleFilter = throttle(() => {
    if (filterPaymentRef.current.value) {
      updateParams({ q: filterPaymentRef.current.value });
    } else {
      deleteParam(["q", "page"]);
    }
  }, 500);

  return {
    handleFilter,
    data,
    isLoading,
    openModal,
    setOpenModal,
    filterPaymentRef,
    error,
  };
};
