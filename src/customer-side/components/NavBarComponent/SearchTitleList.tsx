import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SearchTitleList = ({ setOpenSearchSection, searchHistory, gender }) => {
  const router = useRouter();

  const handleSearchHistory = (value) => {
    router.push("/search/" + value + (gender ? "?gender=" + gender : ""));
    setOpenSearchSection(false);
  };

  return (
    <div className="flex flex-col gap-3">
      {searchHistory.map((search, i) => (
        <p
          className="text-sm w-full cursor-pointer duration-300 text-gray-500 hover:text-gray-800"
          onClick={() => handleSearchHistory(search)}
          key={i}
        >
          {search}
        </p>
      ))}
    </div>
  );
};

export default SearchTitleList;
