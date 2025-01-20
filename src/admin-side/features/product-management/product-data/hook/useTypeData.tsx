import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import useSWR from "swr";
import { fetchTypes } from "../../../../services/type";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useTypeData = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/type"));
  const [openModal, setOpenModal] = useState<boolean>(false);

  const filterTypeRef = useRef();
  const filterCategoryRef = useRef();
  const filterGenderRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/type"));
    const queryParam = searchParams;
    if (queryParam) {
      filterTypeRef.current.value = queryParam.get("q");
      filterCategoryRef.current.value = queryParam.get("category");
      filterGenderRef.current.value = queryParam.get("gender");
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchTypes);

  const handleFilter = throttle(() => {
    updateParams({
      q: filterTypeRef.current.value,
      category: filterCategoryRef.current.value,
      gender: filterGenderRef.current.value,
    });
  }, 500);

  return {
    filterGenderRef,
    handleFilter,
    data,
    isLoading,
    openModal,
    setOpenModal,
    filterTypeRef,
    filterCategoryRef,
    error,
  };
};
