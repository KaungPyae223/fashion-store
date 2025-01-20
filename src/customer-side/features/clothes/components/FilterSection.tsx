"use client";
import FilterContainer from "@/customer-side/components/FilterContainer";
import SectionTitle from "@/customer-side/components/SectionTitle";
import { fetchHome } from "@/customer-side/services/HomePage";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { throttle } from "lodash";
import useSWR from "swr";
import useUpdateParams from "@/hooks/useUpdateParams";
import PriceRangeContainer from "@/customer-side/components/PriceRangeContainer";

const FilterSection = () => {
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

  return (
    <div>
      <SectionTitle title="filter" />
      {!isLoading && (
        <>
          <section className="w-full bg-white divide-y divide-slate-200 shadow-slate-200">
            <FilterContainer
              title="Brands"
              setState={setBrand}
              items={data.brands}
              value={brand}
            />
            <FilterContainer
              title="Types"
              setState={setType}
              items={data.types}
              value={type}
            />
            <FilterContainer
              title="Colors"
              setState={setColor}
              items={data.colors}
              value={color}
            />
            <FilterContainer
              title="Sizes"
              setState={SetSizes}
              items={data.sizes}
              value={size}
            />
            <PriceRangeContainer minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
          </section>
          <div
            onClick={handleFilter}
            className="uppercase mt-8 bg-gray-900 px-4 py-3 flex cursor-pointer justify-center text-white"
          >
            Filter
          </div>
        </>
      )}
    </div>
  );
};

export default FilterSection;
