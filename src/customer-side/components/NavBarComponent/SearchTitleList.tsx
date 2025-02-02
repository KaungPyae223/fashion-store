import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SearchTitleList = ({ setOpenSearchSection, searchHistory }) => {
  
  const router = useRouter();

  const handleSearchHistory = (value) => {
    router.push("/search/" + value);
    setOpenSearchSection(false);
  };
  
  return (
    <div className="flex flex-col gap-3">
      {searchHistory.map((search, i) => (
        <div
          className="text-sm cursor-pointer duration-300 text-gray-500 hover:text-gray-800"
          onClick={() => handleSearchHistory(search)}
          key={i}
        >
          {search}
        </div>
      ))}
    </div>
  );
};

export default SearchTitleList;
