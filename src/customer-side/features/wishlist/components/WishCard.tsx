import { deleteWishList } from "@/customer-side/services/Wishlist";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

interface WishCardInterface {
  img: string;
  title: string;
  color: string;
  amount: number;
  id: string;
  product_id: string;
  discount_price: number;
  discount_percent: number;
}

const WishCard = ({
  img,
  title,
  color,
  amount,
  id,
  product_id,
  discount_price,
  discount_percent,
}: WishCardInterface) => {
  const { revalidateWithoutParam } = useRevalidatedData();

  
  const handleDeleteWishList = async () => {
    await deleteWishList(id);

    revalidateWithoutParam("/customer-wishlist");
  };

  return (
    <div className="relative">
      <div>
        <Image
          width={500}
          height={500}
          alt={title}
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
      </div>
      <div className="flex flex-row gap-3 mt-3">
        <Link
          href={"/wishlist/details/" + product_id}
          className="uppercase cursor-pointer hover:border-black duration-300 flex flex-1 items-center justify-center tracking-wider border py-2 text-sm font-medium"
        >
          Details
        </Link>
        <div
          onClick={handleDeleteWishList}
          className="p-2 cursor-pointer border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
