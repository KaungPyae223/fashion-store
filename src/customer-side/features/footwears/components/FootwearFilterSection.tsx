'use client'
import FilterContainer from "@/customer-side/components/FilterContainer";
import FilterRadioBox from "@/customer-side/components/FilterRadioBox";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React, { useState } from "react";

const FootwearFilterSection = () => {
  
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
      
      <FilterContainer title="Brands" setState={setBrand} items={brandNames} />
      <FilterContainer title="Colors" setState={setColor} items={ColorsName} />
      <FilterContainer title="Sizes" setState={SetSizes} items={SizeName} />
      <FilterContainer title="Price Range" setState={setPrice} items={PrinceRanges} columns={1}/>
        
      </section>
      <div className="uppercase mt-8 bg-gray-900 px-4 py-3 flex cursor-pointer justify-center text-white">
        Filter
      </div>
    </div>
  );
};

export default FootwearFilterSection;
