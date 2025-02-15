import Link from "next/link";
import React from "react";
import Image from "next/image";

interface SearchProductCardInterface {
  id: string;
  img: string;
  title: string;
  brand: string;
  q: string;
  discount_percent: number;
  discount_price: number;
  amount: number;
}

const SearchProductCard = ({
  id,
  img,
  title,
  brand,
  amount,
  discount_percent,
  discount_price,
  q,
}: SearchProductCardInterface) => {

  const search = q ? q : title;

  return (
    <Link href={"/search/" + search + "/details/" + id} className="relative">
      <Image
        width={500}
        height={500}
        alt={title}
        className="h-[300px] w-full object-cover object-center"
        src={img}
      />
      <p className="mt-1">{title}</p>
      <p className="text-gray-500 text-sm">{brand}</p>
      {discount_price > 0 ? (
        <div className="flex flex-row gap-1">
          <p className="mt-1 line-through text-gray-400">{amount} Ks</p>
          <p className="mt-1 ml-1">{amount - discount_price} Ks</p>
          <p className="px-3 py-0.5 rounded-full text-sm font-medium bg-slate-100 text-gray-800 absolute top-3 right-3">
            {discount_percent}% Off
          </p>
        </div>
      ) : (
        <p className="mt-1">{amount} Ks</p>
      )}
    </Link>
  );
};

export default SearchProductCard;
