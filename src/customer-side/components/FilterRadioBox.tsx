import React, { SetStateAction } from "react";

interface FilterRadioBoxInterface {
  value: string;
  title: string;
  name: string;
  setValue: React.Dispatch<SetStateAction<string>>;
}

const FilterRadioBox = ({
  title,
  name,
  setValue,
  value,
}: FilterRadioBoxInterface) => {
  const generateId = () => Math.random().toString();

  const ID = generateId();

  return (
    <label
      htmlFor={ID}
      className="flex items-center ps-4 border border-gray-200 dark:border-gray-700"
    >
      <input
        type="radio"
        name={name}
        value={title}
        checked={value == title}
        onChange={(event) => setValue(event.target.value)}
        className="shrink-0 border-gray-200 rounded-full text-red-600 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-red-500 dark:checked:border-red-500 dark:focus:ring-offset-gray-800"
        id={ID}
      />
      <p className="w-full py-3 ms-3 text-sm font-medium text-gray-600 dark:text-gray-300">
        {title}
      </p>
    </label>
  );
};

export default FilterRadioBox;
