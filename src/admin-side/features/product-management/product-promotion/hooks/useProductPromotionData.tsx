import { fetchProduct } from "@/admin-side/services/product";
import useProductStore from "@/admin-side/stores/useProductStore";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useUpdateParams from "@/hooks/useUpdateParams";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

export const useProductPromotionData = () => {
  const { setResetProductStore } = useProductStore();

  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(
    AddParamsToURL(baseUrl + "/product/promotion")
  );

  const filterProductNameRef = useRef();
  const categoryFilterRef = useRef();
  const typeFilterRef = useRef();
  const brandFilterRef = useRef();

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/product/promotion"));
    if (searchParams) {
      filterProductNameRef.current.value = searchParams.get("q");
      categoryFilterRef.current.value = searchParams.get("category");
      typeFilterRef.current.value = searchParams.get("type");
      brandFilterRef.current.value = searchParams.get("brand");
    }
  }, [searchParams]);

  useEffect(() => {
    setResetProductStore();
  }, []);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchProduct);

  const FilterData = useSWR(baseUrl + "/product/filter-data", fetchProduct);

  const handleFilter = throttle(() => {
    updateParams({
      q: filterProductNameRef.current.value,
      category: categoryFilterRef.current.value,
      type: typeFilterRef.current.value,
      brand: brandFilterRef.current.value,
    });
  }, 500);

  const [typeData, setTypeData] = useState(null);

  useEffect(() => {
    if (!FilterData.isLoading) {
      setTypeData(FilterData.data.types);
    }
  }, [FilterData.isLoading]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;

    setTypeData(
      FilterData.data.types.filter((type) => type.category == category)
    );
  };

  return {
    handleFilter,
    data,
    isLoading,
    filterProductNameRef,
    typeFilterRef,
    brandFilterRef,
    categoryFilterRef,
    error,
    FilterData,
    typeData,
    handleCategoryChange,
  };
};
