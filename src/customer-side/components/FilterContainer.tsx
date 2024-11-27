import React from "react";
import FilterRadioBox from "./FilterRadioBox";

interface FilterContainerInterface {
  title: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  items: string[];
  columns: number
}

const FilterContainer = ({
  title,
  setState,
  items,
  columns
}: FilterContainerInterface) => {
  return (
    <details className="py-4 group">
      <summary className="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
        {title}
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
      <div className={`grid ${columns === 2 ? "grid-cols-2": "grid-cols-3"} mt-6 mb-3`}>
        {items.map((item) => (
          <FilterRadioBox
            key={item}
            title={item}
            name={title}
            setValue={setState}
          />
        ))}
      </div>
    </details>
  );
};

export default FilterContainer;
