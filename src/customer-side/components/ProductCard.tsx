import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ProductCardInterface {
  img: string;
  title: string;
  color: string;
  amount: string;
  href: string;
}

const ProductCard = ({
  img,
  title,
  color,
  amount,
  href,
}: ProductCardInterface) => {
  return (
    <Link href={href}>
      <Image
        alt={title}
        height={500}
        width={500}
        className="h-[300px] w-full object-cover object-center"
        src={img}
      />
      <p className="mt-1">{title}</p>
      <p className="text-gray-500 text-sm">{color}</p>
      <p className="mt-1">{amount} Ks</p>
    </Link>
  );
};

export default ProductCard;
