import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useRemoveParam from "@/hooks/useRemoveParam";
import useSWR from "swr";
import { fetchBrand } from "../../../../services/brand";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useBrandData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();
  const deleteParam = useRemoveParam();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/brand"));
  const [openModal, setOpenModal] = useState<boolean>(false);

  const filterBrandRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/brand"));
    const queryParam = searchParams.get("q");
    if (queryParam) {
      filterBrandRef.current.value = queryParam;
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchBrand);

  

  const handleFilter = throttle(() => {
    if (filterBrandRef.current.value) {
      updateParams({ q: filterBrandRef.current.value });
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
    filterBrandRef,
    error,
  };
};
