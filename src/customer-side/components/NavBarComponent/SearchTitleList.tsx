import Link from "next/link";
import React from "react";

const SearchTitleList = () => {
  interface searchListsInterface {
    title: string;
    link: string;
  }

  const searchLists: searchListsInterface[] = [
    {
      title: "Nike Air Max",
      link: "/",
    },
    {
      title: "Sisburma",
      link: "/",
    },
    {
      title: "Bo Bo Bo Bo",
      link: "/",
    },
    {
      title: "Piano Piano",
      link: "/",
    },
    {
      title: "We are the champion",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {searchLists.map((search) => (
        <Link className="text-sm duration-300 text-gray-500 hover:text-gray-800" href={search.link} key={search.title} >{search.title}</Link>
      ))}
    </div>
  );
};

export default SearchTitleList;
