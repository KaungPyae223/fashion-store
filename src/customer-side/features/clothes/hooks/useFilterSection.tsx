import { throttle } from "lodash";
import useSWR from "swr";
import useUpdateParams from "@/hooks/useUpdateParams";
import { fetchHome } from "@/customer-side/services/HomePage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useFilterSection = () => {
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(baseUrl + "/filter-data/1");

  const { data, isLoading, error } = useSWR(fetchUrl, fetchHome);

  const [brand, setBrand] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [color, setColor] = useState<string>("All");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(500000);

  const [size, SetSizes] = useState<string>("All");

  useEffect(() => {
    setType("All");

    setFetchUrl(`${baseUrl}/filter-data/1?gender=${gender ? gender : "All"}`);
  }, [gender]);

  useEffect(() => {
    setFetchUrl(`${baseUrl}/filter-data/1?gender=${gender ? gender : "All"}`);

    if (searchParams.get("brand")) {
      setBrand(searchParams.get("brand"));
      setType(searchParams.get("type"));
      setColor(searchParams.get("color"));
      SetSizes(searchParams.get("size"));
      setMinPrice(parseInt(searchParams.get("min_price")));
      setMaxPrice(parseInt(searchParams.get("max_price")));
    }
  }, [searchParams]);

  const handleFilter = throttle(() => {
    updateParams({
      brand: brand,
      type: type,
      color: color,
      size: size,
      min_price: minPrice.toString(),
      max_price: maxPrice.toString(),
    });
  }, 500);

  return {data, isLoading, handleFilter, brand, setBrand, type, setType, color, setColor, size, SetSizes, minPrice, setMinPrice, maxPrice, setMaxPrice};
};
