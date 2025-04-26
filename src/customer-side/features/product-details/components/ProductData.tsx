"use client";
import React, { useState } from "react";
import ProductImage from "./ProductImage";
import SizeCard from "./SizeCard";
import SectionSubTitle from "@/customer-side/components/SectionSubTitle";
import Rating from "./Rating";
import useCraftStore from "@/customer-side/stores/useCraftStore";
import { getCookie } from "react-use-cookie";
import { storeWishList } from "@/customer-side/services/Wishlist";
import toast, { Toaster } from "react-hot-toast";

const ProductData = ({ productData }) => {
  const { setStoreCraft } = useCraftStore();

  const [selectedSize, setSelectedSize] = useState<number>(null);
  const [sizeName, setSizeName] = useState<string>("Select a size");

  const addCraft = () => {
    const data = {
      id: productData.id,
      name: productData.title,
      color: productData.color,
      size: sizeName,
      image: productData.cover_image,
      discount_amount: productData.discount_price,
      profit_amount: productData.profit_amount,
      discount_percent: productData.discount_percent,
      original_price: productData.price,
      unit_price: productData.price - productData.discount_price,
      qty: 1,
      product_size_id: selectedSize,
    };

    setStoreCraft(data);
  };

  const handleWishList = async () => {
    const user_id = getCookie("user_token");

    if (!user_id) {
      toast.error("Please Log In First");
      return;
    }

    const res = await storeWishList(productData.id);
    const json = await res.json();

    if (res.ok) {
      toast.success(json.message);
    }
  };

  
  
  return (
    <div className="grid grid-cols-3 gap-6 border-b pb-16 border-b-gray-200">
      <Toaster />
      <div className="grid col-span-full lg:col-span-2 grid-cols-2 gap-1">
        {productData.detailsImage.map((el, i) => (
          <ProductImage key={i} image={el} />
        ))}
      </div>
      <div className="flex flex-col col-span-full lg:col-span-1 items-center px-6">
        <p className="uppercase tracking-wider text-xl font-semibold text-center">
          {productData.title}
        </p>
        <div className="mt-3">
          <Rating rating={productData.rating} />
        </div>

        <p className="text-gray-500 my-4 mt-6">{productData.color}</p>
        {productData.discount_percent > 0 ? (
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-row items-center gap-3">
              <p className="line-through text-gray-500">
                {productData.price} Ks
              </p>
              <p className="text-sm text-gray-600 rounded-full border border-gray-500 px-3 py-0.5">
                {productData.discount_percent}% OFF
              </p>
            </div>
            <p className="font-medium text-lg">
              {productData.price - productData.discount_price} Ks
            </p>
          </div>
        ) : (
          <p className="font-medium text-lg">{productData.price} Ks</p>
        )}

        <div className="w-full mt-8">
          <div className="text-xs flex flex-row justify-between items-center">
            <p>{sizeName}</p>
          </div>
          <div className="my-5 flex flex-wrap justify-center items-center">
            {productData.size?.map((el) => (
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
        <button
          disabled={sizeName === "Select a size"}
          onClick={addCraft}
          className="uppercase disabled:opacity-50 tracking-wider py-3 w-[300px] flex justify-center cursor-pointer mt-6 font-medium bg-gray-900 hover:bg-gray-500 duration-300 text-white"
        >
          Add to craft
        </button>
        <div
          onClick={handleWishList}
          className="uppercase tracking-wider py-3 w-[300px] flex justify-center cursor-pointer mt-5 font-medium bg-slate-100 hover:text-gray-500 duration-300 text-gray-800"
        >
          Add to Wishlist
        </div>
        <div className="mt-16 mb-6 border-b border-gray-500">
          <SectionSubTitle title="description" />
        </div>
        <div className="text-justify text-sm">{productData.description}</div>
      </div>
    </div>
  );
};

export default ProductData;
