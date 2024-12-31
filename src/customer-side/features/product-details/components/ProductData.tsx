"use client";
import React, { useState } from "react";
import ProductImage from "./ProductImage";
import SizeCard from "./SizeCard";
import { PiCoatHangerThin } from "react-icons/pi";
import SectionSubTitle from "@/customer-side/components/SectionSubTitle";
import Rating from "./Rating";

const ProductData = ({ productData }) => {
  const [selectedSize, setSelectedSize] = useState<number>(null);
  const [sizeName, setSizeName] = useState<string>("Select a size");

  return (
    <div className="container grid grid-cols-3 gap-6">
      <div className="grid col-span-2 grid-cols-2 gap-1">
        {productData.detailsImage.map((el, i) => (
          <ProductImage key={i} image={el} />
        ))}
      </div>
      <div className="flex flex-col items-center px-6">
        <p className="uppercase tracking-wider text-xl font-semibold text-center">
          {productData.title}
        </p>
        <div className="mt-3">
          <Rating rating={productData.rating} />
        </div>

        <p className="text-gray-500 my-4 mt-6">{productData.color}</p>
        <p className="font-medium text-lg">{productData.price} Ks</p>
        <div className="w-full mt-8">
          <div className="text-xs flex flex-row justify-between items-center">
            <p>{sizeName}</p>
            <div className="flex flex-row items-center gap-1.5 cursor-pointer">
              <PiCoatHangerThin className="size-3" />
              <p className="font-medium ">Size guide</p>
            </div>
          </div>
          <div className="my-5 flex flex-wrap justify-center items-center">
            {productData.size.map((el) => (
              <SizeCard
                key={el.id}
                size={el.name}
                id={el.id}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                setSizeName={setSizeName}
              />
            ))}
          </div>
        </div>
        <div className="uppercase tracking-wider py-3 w-[300px] flex justify-center cursor-pointer mt-6 font-medium bg-gray-900 hover:bg-gray-500 duration-300 text-white">
          Add to craft
        </div>
        <div className="uppercase tracking-wider py-3 w-[300px] flex justify-center cursor-pointer mt-5 font-medium bg-slate-100 hover:text-gray-500 duration-300 text-gray-800">
          Add to Wishlist
        </div>
        <div className="mt-16 mb-6 border-b border-gray-500">
          <SectionSubTitle title="description" />
        </div>
        <div className="text-justify text-sm">
          {productData.description}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
