import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useRemoveParam from "@/hooks/useRemoveParam";
import useSWR, { mutate } from "swr";
import { fetchSizes } from "../../../services/size";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useSizeData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();
  const deleteParam = useRemoveParam();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/size"));
  const [openModal, setOpenModal] = useState<boolean>(false);

  const filterSizeRef = useRef();
  const filterCategoryRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/size"));
    const queryParam = searchParams;
    if (queryParam.get("category")) {
      filterSizeRef.current.value = queryParam.get("q");
      filterCategoryRef.current.value = queryParam.get("category");

    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchSizes);

  const handleRevalidate = async () => {
    await mutate(fetchUrl);
  };

  const handleFilter = throttle(() => {
    updateParams({
      q:filterSizeRef.current.value,
      category:filterCategoryRef.current.value
    });
  }, 500);

  return {
    handleFilter,
    handleRevalidate,
    data,
    isLoading,
    openModal,
    setOpenModal,
    filterSizeRef,
    filterCategoryRef,
    error,
  };
};
