"use client";
import FilterContainer from "@/customer-side/components/FilterContainer";
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
        <FilterContainer
          title="Brands"
          setState={setBrand}
          items={brandNames}
        />
        <FilterContainer title="Types" setState={setType} items={typesName} />
        <FilterContainer
          title="Colors"
          setState={setColor}
          items={ColorsName}
        />
        <FilterContainer title="Sizes" setState={SetSizes} items={SizeName} />
        <FilterContainer
          title="Price Range"
          setState={setPrice}
          items={PrinceRanges}
          columns={2}
        />
      </section>
      <div className="uppercase mt-8 bg-gray-900 px-4 py-3 flex cursor-pointer justify-center text-white">
        Filter
      </div>
    </div>
  );
};

export default FilterSection;
