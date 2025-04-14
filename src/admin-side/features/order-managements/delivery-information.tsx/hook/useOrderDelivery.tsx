import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useRemoveParam from "@/hooks/useRemoveParam";
import useSWR from "swr";
import { fetchDeliveries } from "../../../../services/deliver";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useOrderDelivery = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();
  const deleteParam = useRemoveParam();

  const searchParams = useSearchParams();

  const url = process.env.NEXT_PUBLIC_BASE_URL + "/delivery";

  const [fetchUrl, setFetchUrl] = useState(
    AddParamsToURL(url)
  );
  const [openModal, setOpenModal] = useState<boolean>(false);

  const filterDeliveryRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(url));
    const queryParam = searchParams.get("q");
    if (queryParam) {
      filterDeliveryRef.current.value = queryParam;
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchDeliveries);

  const handleFilter = throttle(() => {
    if (filterDeliveryRef.current.value) {
      updateParams({ q: filterDeliveryRef.current.value });
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
    filterDeliveryRef,
    error,
  };
};
