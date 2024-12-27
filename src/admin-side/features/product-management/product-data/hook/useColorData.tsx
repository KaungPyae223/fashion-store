import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useRemoveParam from "@/hooks/useRemoveParam";
import useSWR from "swr";
import { fetchColor } from "../../../../services/color";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useColorData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();
  const deleteParam = useRemoveParam();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/size"));
  const [openModal, setOpenModal] = useState<boolean>(false);

  const filterColorRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/color"));
    const queryParam = searchParams.get("q");
    if (queryParam) {
      filterColorRef.current.value = queryParam;
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchColor);


  const handleFilter = throttle(() => {
    if (filterColorRef.current.value) {
      updateParams({ q: filterColorRef.current.value });
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
    filterColorRef,
    error,
  };
};
