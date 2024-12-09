"use client";
import React, { SetStateAction } from "react";
import CraftCard from "./CraftCard";

interface CraftInterface {
    setOpenCraft:React.Dispatch<SetStateAction<boolean>>
}

const Craft = ({setOpenCraft}:CraftInterface) => {
  interface CraftProduct {
    productName: string;
    color: string;
    size: string;
    quantity: number;
    productPrice: number;
    productImage: string;
  }

  // Example CraftProducts array with 5 products
  const CraftProducts: CraftProduct[] = [
    {
      productName: "Auralee Luster Plaiting Long Sleeve T-Shirt",
      color: "Yellow",
      size: "Large",
      quantity: 1,
      productPrice: 140000,
      productImage:
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/1/9/19-08-2024-BLR_A00P01GT-LMY_1_1.jpg",
    },
    {
      productName: "Nike Air Max 90",
      color: "White/Black",
      size: "Medium",
      quantity: 2,
      productPrice: 120000,
      productImage:
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/1/9/19-08-2024-BLR_A00P01GT-LMY_1_1.jpg",
    },
    {
      productName: "Carhartt WIP Chase Sweatshirt",
      color: "Black",
      size: "XL",
      quantity: 1,
      productPrice: 85000,
      productImage:
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/1/9/19-08-2024-BLR_A00P01GT-LMY_1_1.jpg",
    },
    {
      productName: "Acne Studios Knit Beanie",
      color: "Pink",
      size: "One Size",
      quantity: 3,
      productPrice: 45000,
      productImage:
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/1/9/19-08-2024-BLR_A00P01GT-LMY_1_1.jpg",
    },
    {
      productName: "Fear of God Essentials Hoodie",
      color: "Gray",
      size: "Small",
      quantity: 2,
      productPrice: 110000,
      productImage:
        "https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/1/9/19-08-2024-BLR_A00P01GT-LMY_1_1.jpg",
    },
  ];

  return (
    <div className="h-screen flex flex-col z-50 bg-white w-[390px]">
      <div className="border-b py-3 px-5 gap-5 flex flex-row items-center justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={() => setOpenCraft(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <p className="uppercase tracking-wider font-medium gap-6 text-sm">
          Your Craft (2)
        </p>

        <div></div>
      </div>
      <div className="flex-1 overflow-y-auto px-5">
        {CraftProducts.map((product, index) => (
          <CraftCard product={product} key={index} />
        ))}
      </div>
      <div className="mt-auto p-5 border-t">
        <div className="flex items-center mb-1 text-sm justify-between">
          <p>Subtotal:</p>
          <p>190000 Ks</p>
        </div>
        <div className="flex items-center mb-3 text-sm justify-between">
          <p>Tax:</p>
          <p>19000 Ks</p>
        </div>
        <div className="flex items-center font-medium mb-6 justify-between">
          <p>Total:</p>
          <p>19000 Ks</p>
        </div>
        <div className="p-3 bg-black text-white flex items-center justify-center font-medium cursor-pointer">
          Make Order
        </div>
      </div>
    </div>
  );
};

export default Craft;
