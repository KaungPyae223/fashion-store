import Link from "next/link";
import React from "react";
import Image from "next/image";

interface SearchProductCardInterface {
  img: string;
  title: string;
  color: string;
}

const SearchProductCard = ({
  img,
  title,
  color,
}: SearchProductCardInterface) => {
  return (
    <Link href={"/"}>
      <img alt={title} className="h-[300px] w-full object-cover object-center" src={img} />
      <p className="mt-1">{title}</p>
      <p className="text-gray-500 text-sm">{color}</p>
    </Link>
  );
};

export default SearchProductCard;
