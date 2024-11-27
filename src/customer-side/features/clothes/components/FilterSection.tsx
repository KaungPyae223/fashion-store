"use client";
import FilterRadioBox from "@/customer-side/components/FilterRadioBox";
import SectionSubTitle from "@/customer-side/components/SectionSubTitle";
import SectionTitle from "@/customer-side/components/SectionTitle";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FilterSection = () => {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");

  const [brands, setBrand] = useState<string>("All");
  const [types, setType] = useState<string>("All");

  const brandNames: string[] = [
    "All",
    "Giordano",
    "I Max",
    "Nike",
    "North The Face",
    "Victor",
    "Lacoste",
    "Zara",
    "Polo",
  ];

  const [typesName, setTypesName] = useState<string[]>([]);

  useEffect(() => {
    setType("All");
    gender === "Women"
      ? setTypesName([
          "All",
          "Jacket",
          "T-Shirt",
          "Trouser",
          "Short-Skirts",
          "Skirts",
          "Dress",
        ])
      : setTypesName(["All", "Jacket", "T-Shirt", "Trouser"]);
  }, [gender]);

  const [color, setColor] = useState<string[]>([]);

  const ColorsName: string[] = [
    "All",
    "White",
    "Black",
    "Green",
    "Red",
    "Blue",
  ];

  const [price, setPrice] = useState<string[]>([]);

  const PrinceRanges: string[] = [
    "All",
    "< 50000",
    "50000 <= 100000",
    "100000 <= 500000",
    "> 500000",
  ];

  const [Sizes, SetSizes] = useState<string[]>([]);

  const SizeName: string[] = ["All", "Small", "Medium", "Large"];

  return (
    <div>
      <SectionTitle title="filter" />
      <section className="w-full bg-white divide-y divide-slate-200 shadow-slate-200">
        <details className="py-4 group" open>
          <summary className="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
            Brands
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac13 desc-ac13"
            >
              <title id="title-ac13">Open icon</title>
              <desc id="desc-ac13">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>

          <div className="grid grid-cols-3 mt-6 mb-3">
            {brandNames.map((brand) => (
              <FilterRadioBox
                key={brand}
                title={brand}
                name="brands"
                setValue={setBrand}
              />
            ))}
          </div>
        </details>
        <details className="py-4 group">
          <summary className="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
            Types
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac14 desc-ac14"
            >
              <title id="title-ac14">Open icon</title>
              <desc id="desc-ac14">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <div className="grid grid-cols-3 mt-6 mb-3">
            {typesName.map((type) => (
              <FilterRadioBox
                key={type}
                title={type}
                name="types"
                setValue={setType}
              />
            ))}
          </div>
        </details>
        <details className="py-4 group">
          <summary className="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
            Colors
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac15 desc-ac15"
            >
              <title id="title-ac15">Open icon</title>
              <desc id="desc-ac15">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <div className="grid grid-cols-3 mt-6 mb-3">
            {ColorsName.map((type) => (
              <FilterRadioBox
                key={type}
                title={type}
                name="colors"
                setValue={setColor}
              />
            ))}
          </div>
        </details>
        <details className="py-4 group">
          <summary className="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
            Sizes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac16 desc-ac16"
            >
              <title id="title-ac16">Open icon</title>
              <desc id="desc-ac16">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <div className="grid grid-cols-3 mt-6 mb-3">
            {SizeName.map((size) => (
              <FilterRadioBox
                key={size}
                title={size}
                name="sizes"
                setValue={SetSizes}
              />
            ))}
          </div>
        </details>
        <details className="py-4 group">
          <summary className="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
            Price Range
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac16 desc-ac16"
            >
              <title id="title-ac16">Open icon</title>
              <desc id="desc-ac16">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <div className="grid grid-cols-2 mt-6 mb-3">
            {PrinceRanges.map((priceRange) => (
              <FilterRadioBox
                key={priceRange}
                title={priceRange}
                name="prices"
                setValue={setPrice}
              />
            ))}
          </div>
        </details>
      </section>
      <div className="uppercase mt-8 bg-gray-900 px-4 py-3 flex cursor-pointer justify-center text-white">Filter</div>
    </div>
  );
};

export default FilterSection;
