import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ProductCardInterface {
  img: string;
  title: string;
  color: string;
  amount: number;
  href: string;
  discount_percent: number;
  discount_price: number;
  index:number;
}

const ProductCard = ({
  img,
  title,
  color,
  amount,
  href,
  discount_percent,
  discount_price,
  index
}: ProductCardInterface) => {
  return (
    <Link href={href} className={`relative ${index==9 ? "md:last:hidden":""}  ${index==8 ? "lgHidden":""} xl:block xl:last:block`}>
      <Image
        alt={title}
        height={500}
        width={500}
        className="h-[300px] w-full object-cover object-center"
        src={img}
      />
      <p className="mt-1">{title}</p>
      <p className="text-gray-500 text-sm">{color}</p>
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

export default ProductCard;
