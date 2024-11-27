"use client";
import FilterContainer from "@/customer-side/components/FilterContainer";
import FilterRadioBox from "@/customer-side/components/FilterRadioBox";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React, { useState } from "react";

const AccessoriesFilterSection = () => {
  const [brands, setBrand] = useState<string>("All");

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

  const [type, setType] = useState<string[]>([]);

  const typesName: string[] = [
    "All",
    "Bags",
    "Pop Culture",
    "Hats",
    "Umbrella",
    "Fancy",
  ];

  const [price, setPrice] = useState<string[]>([]);

  const PrinceRanges: string[] = [
    "All",
    "< 50000",
    "50000 <= 100000",
    "100000 <= 500000",
    "> 500000",
  ];

  return (
    <div>
      <SectionTitle title="filter" />
      <section className="w-full bg-white divide-y divide-slate-200 shadow-slate-200">
        <FilterContainer title="Brands" setState={setBrand} items={brandNames} />
        <FilterContainer title="Types" setState={setType} items={typesName} />
        <FilterContainer title="Price Range" setState={setPrice} items={PrinceRanges} columns={2}/> 
      </section>
      <div className="uppercase mt-8 bg-gray-900 px-4 py-3 flex cursor-pointer justify-center text-white">
        Filter
      </div>
    </div>
  );
};

export default AccessoriesFilterSection;
