"use client";
import FilterContainer from "@/customer-side/components/FilterContainer";
import SectionTitle from "@/customer-side/components/SectionTitle";

import React, { useState } from "react";

import PriceRangeContainer from "@/customer-side/components/PriceRangeContainer";
import { useAccessoriesFilterSection } from "../hooks/useAccessoriesFilterSection";
import Modal from "@/admin-side/components/Modal";

const AccessoriesFilterSection = () => {
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
  } = useAccessoriesFilterSection();

  const [mobileExpand, setMobileExpand] = useState(false);

  return (
    <>
      <div className="hidden lg:block">
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
      <div className="block lg:hidden">
        <div
          onClick={() => setMobileExpand(true)}
          className="py-2 px-6 border mx-auto flex flex-row items-center gap-3 border-gray-300 w-fit cursor-pointer rounded-full"
        >
          Open Filter Section
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        {!isLoading && (
          <Modal openModal={mobileExpand} setOpenModal={setMobileExpand}>
            <div className="p-3 w-[75vw] max-w-[350px] max-h-[75vh] overflow-y-auto">
              <p className="text-center text-2xl font-medium tracking-wide mt-3 mb-6">
                Filter Section
              </p>
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
                className="uppercase mt-8 tracking-wide bg-gray-900 px-4 py-3 flex cursor-pointer justify-center text-white"
              >
                Filter
              </div>
              <div
                onClick={() => setMobileExpand(false)}
                className="uppercase mt-3 tracking-wide bg-white px-4 py-3 flex cursor-pointer justify-center text-bg-gray-800 border border-gray-500"
              >
                Cancel
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default AccessoriesFilterSection;
