"use client";
import React, { useState } from "react";
import ProductImage from "./ProductImage";
import SizeCard from "./SizeCard";
import { PiCoatHangerThin } from "react-icons/pi";
import SectionSubTitle from "@/customer-side/components/SectionSubTitle";
import Rating from "./Rating";

const ProductData = () => {
  const [selectedSize, setSelectedSize] = useState<number>(null);
  const [sizeName, setSizeName] = useState<string>("Select a size");

  return (
    <div className="container grid grid-cols-3 gap-6">
      <div className="grid col-span-2 grid-cols-2 gap-1">
        <ProductImage
          image={
            "https://cdn.shopify.com/s/files/1/0022/4008/6074/files/V2013HAN_FA24_M_ECOMM_fleece_FRONT_2.jpg?v=1730834629&width=2000&height=2500&crop=center"
          }
        />
        <ProductImage
          image={
            "https://cdn.shopify.com/s/files/1/0022/4008/6074/files/V2013HAN_FA24_M_ECOMM_fleece_FRONT_2.jpg?v=1730834629&width=2000&height=2500&crop=center"
          }
        />
        <ProductImage
          image={
            "https://cdn.shopify.com/s/files/1/0022/4008/6074/files/V2013HAN_FA24_M_ECOMM_fleece_FRONT_2.jpg?v=1730834629&width=2000&height=2500&crop=center"
          }
        />
        <ProductImage
          image={
            "https://cdn.shopify.com/s/files/1/0022/4008/6074/files/V2013HAN_FA24_M_ECOMM_fleece_FRONT_2.jpg?v=1730834629&width=2000&height=2500&crop=center"
          }
        />
      </div>
      <div className="flex flex-col items-center px-6">
        <p className="uppercase tracking-wider text-xl font-semibold text-center">
          Fear of God ESSENTIALS Core Logo Fleece Hoodie
        </p>
        <div className="mt-3">
          <Rating rating={4.8} />
        </div>

        <p className="text-gray-500 my-4 mt-6">Black</p>
        <p className="font-medium text-lg">360000 Ks</p>
        <div className="w-full mt-8">
          <div className="text-xs flex flex-row justify-between items-center">
            <p>{sizeName}</p>
            <div className="flex flex-row items-center gap-1.5 cursor-pointer">
              <PiCoatHangerThin className="size-3" />
              <p className="font-medium ">Size guide</p>
            </div>
          </div>
          <div className="my-5 grid grid-cols-3">
            <SizeCard
              size="Small"
              id={1}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              setSizeName={setSizeName}
            />
            <SizeCard
              size="Large"
              id={2}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              setSizeName={setSizeName}
            />
            <SizeCard
              size="X-Large"
              id={3}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              setSizeName={setSizeName}
            />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          nulla, officiis minus est in a quod maxime beatae reiciendis
          voluptatibus dolores eveniet, nihil quidem voluptas optio tempora
          impedit natus, numquam pariatur inventore rerum fugit veritatis
          maiores earum? Pariatur omnis dicta ullam debitis at veniam nemo
          quisquam, dolore asperiores aut odit?
        </div>
      </div>
    </div>
  );
};

export default ProductData;
