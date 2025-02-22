import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useRemoveParam from "@/hooks/useRemoveParam";
import useSWR from "swr";

import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { fetchBrand } from "@/admin-side/services/brand";

export const useBlogData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();
  const deleteParam = useRemoveParam();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/blog"));
  const [openModal, setOpenModal] = useState<boolean>(false);

  const filterBlogRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/blog"));
    const queryParam = searchParams.get("q");
    if (queryParam) {
      filterBlogRef.current.value = queryParam;
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchBrand);

  

  const handleFilter = throttle(() => {
    if (filterBlogRef.current.value) {
      updateParams({ q: filterBlogRef.current.value });
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
    filterBlogRef,
    error,
  };
};
