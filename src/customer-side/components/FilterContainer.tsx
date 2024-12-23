import React, { useState } from "react";
import FilterRadioBox from "./FilterRadioBox";
import { AnimatePresence, motion } from "motion/react";

interface FilterContainerInterface {
  title: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  items: string[];
  columns: number;
}

const FilterContainer = ({
  title,
  setState,
  items,
  columns,
}: FilterContainerInterface) => {
  const [isOpen, setExpanded] = useState<boolean>(false);

  return (
    <div className="py-4">
      <div
        className="pr-8 font-medium list-none relative cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900"
        onClick={() => setExpanded(!isOpen)}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 ${
            isOpen && "rotate-45"
          }`}
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
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              height: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
              opacity: { duration: 0.4, delay: 0.2 }, // Delay opacity to start after height begins
            }}
            className="overflow-hidden"
          >
            <div
              className={`grid ${
                columns === 1 ? "grid-cols-1" : "grid-cols-2"
              } pt-6 pb-3`}
            >
              {items.map((item) => (
                <FilterRadioBox
                  key={item}
                  title={item}
                  name={title}
                  setValue={setState}
                />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterContainer;
