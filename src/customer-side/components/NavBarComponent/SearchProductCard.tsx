import Link from "next/link";
import React from "react";
import Image from "next/image";

interface SearchProductCardInterface {
  id: string;
  img: string;
  title: string;
  brand: string;
  q: string;
}

const SearchProductCard = ({
  id,
  img,
  title,
  brand,
  amount,
  q,
}: SearchProductCardInterface) => {
  return (
    <Link href={"/search/" + q + "/details/" + id}>
      <Image
        width={500}
        height={500}
        alt={title}
        className="h-[300px] w-full object-cover object-center"
        src={img}
      />
      <p className="mt-1">{title}</p>
      <p className="text-gray-500 text-sm">{brand}</p>
      <p className="mt-1">{amount} Ks</p>
    </Link>
  );
};

export default SearchProductCard;
