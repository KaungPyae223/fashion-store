"use client";
import FilterContainer from "@/customer-side/components/FilterContainer";
import SectionTitle from "@/customer-side/components/SectionTitle";

import React from "react";

import PriceRangeContainer from "@/customer-side/components/PriceRangeContainer";
import { useFilterSection } from "../hooks/useFilterSection";

const FilterSection = () => {
  const {
    data,
    isLoading,
    handleFilter,
    brand,
    setBrand,
    type,
    setType,
    color,
    setColor,
    size,
    SetSizes,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
  } = useFilterSection();

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
            <PriceRangeContainer
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
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
