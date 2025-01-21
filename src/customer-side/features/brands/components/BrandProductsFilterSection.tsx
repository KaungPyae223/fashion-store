"use client";
import { throttle } from "lodash";
import FilterContainer from "@/customer-side/components/FilterContainer";
import PriceRangeContainer from "@/customer-side/components/PriceRangeContainer";
import SectionTitle from "@/customer-side/components/SectionTitle";
import useUpdateParams from "@/hooks/useUpdateParams";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const BrandProductsFilterSection = ({ filterData }) => {
  const [category, setCategory] = useState<string>("All");
  const updateParams = useUpdateParams();

  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);

  const categoriesName: string[] = [
    "All",
    "Clothing",
    "Footwear",
    "Accessories",
    "Lifestyle",
  ];

  const [types, setType] = useState<string>("All");
  const [color, setColor] = useState<string>("All");
  const [Sizes, SetSizes] = useState<string>();

  const [sizeData, setSizeData] = useState([]);
  const [typeData, setTypeData] = useState([]);

  useEffect(() => {
    const categoryID = (category) => {
      switch (category) {
        case "Clothing":
          return 1;
        case "Footwear":
          return 2;
        case "Accessories":
          return 3;
        case "Lifestyle":
          return 4;
        default:
          return 0;
      }
    };

    const id = categoryID(category);

    if (id > 0) {
      setSizeData([
        "All",
        ...filterData.sizes
          .filter((el) => el.category_id === id) // Ensure strict equality
          .map((el) => el.name),
      ]);
      setTypeData([
        "All",
        ...filterData.types
          .filter((el) => el.category_id === id) // Ensure strict equality
          .map((el) => el.name),
      ]);
    } else {
      setSizeData(["All", ...filterData.sizes.map((el) => el.name)]);
      setTypeData(["All", ...filterData.types.map((el) => el.name)]);
    }

    SetSizes("All");
    setType("All");
  }, [category, filterData]);

  const handleFilter = throttle(() => {
      updateParams({
        category: category,
        type: types,
        color: color,
        size: Sizes,
        min_price: minPrice.toString(),
        max_price: maxPrice.toString(),
      });
    }, 500);
  
    useEffect(() => {
      if (searchParams.get("category")) {
        setCategory(searchParams.get("category"));
        setType(searchParams.get("type"));
        setColor(searchParams.get("color"));
        SetSizes(searchParams.get("size"));
        setMinPrice(parseInt(searchParams.get("min_price")));
        setMaxPrice(parseInt(searchParams.get("max_price")));
      }
    }, [searchParams]);


  return (
    <div>
      <SectionTitle title="filter" />
      <section className="w-full bg-white divide-y divide-slate-200 shadow-slate-200">
        <FilterContainer
          title="Categories"
          setState={setCategory}
          items={categoriesName}
          value={category}
        />
        <FilterContainer
          title="Types"
          setState={setType}
          items={typeData}
          value={types}
        />
        <FilterContainer
          title="Colors"
          setState={setColor}
          items={filterData.colors}
          value={color}
        />
        <FilterContainer
          title="Sizes"
          setState={SetSizes}
          items={sizeData}
          value={Sizes}
        />
        <PriceRangeContainer
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </section>
      <div onClick={handleFilter} className="uppercase mt-8 bg-gray-900 px-4 py-3 flex cursor-pointer justify-center text-white">
        Filter
      </div>
    </div>
  );
};

export default BrandProductsFilterSection;
