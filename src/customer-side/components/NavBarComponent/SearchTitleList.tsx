import Link from "next/link";
import React from "react";

const SearchTitleList = ({ searchHistory }) => {
  return (
    <div className="flex flex-col gap-3">
      {searchHistory.map((search, i) => (
        <Link
          className="text-sm duration-300 text-gray-500 hover:text-gray-800"
          href={"/search/" + search}
          key={i}
        >
          {search}
        </Link>
      ))}
    </div>
  );
};

export default SearchTitleList;
