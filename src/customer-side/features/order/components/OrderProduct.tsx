import useCraftStore from "@/customer-side/stores/useCraftStore";
import Image from "next/image";
import React from "react";

const OrderProduct = ({ data }) => {
  const { decreaseQty, increaseQty, removeProduct } = useCraftStore();

  const Product = {
    id: data.id,
    size: data.size,
  };

  const handleIncreaseQty = () => {
    increaseQty(Product);
  };

  const handleDecreaseQty = () => {
    decreaseQty(Product);
  };

  const handleRemoveProduct = () => {
    removeProduct(Product);
  };

  return (
    <div className="flex flex-row items-start gap-6 mb-6">
      <Image
        alt={data.name + "image"}
        height={120}
        width={200}
        className="w-[80px] h-fit object-cover object-center"
        src={data.image}
      />
      <div className="flex-1 text-sm">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-3 items-center">
            <p className="font-medium text-base">{data.name}</p>
            {data.discount_percent > 0 && (
              <p className="text-xs text-gray-600 rounded-full border border-gray-500 px-1.5 py-0.5">
                {data.discount_percent}% OFF
              </p>
            )}
          </div>
          <div onClick={handleRemoveProduct}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-5 text-gray-400 hover:text-gray-800 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>

        <p className="text-gray-500 my-1">{data.color}</p>

        <p>{data.size} </p>

        <div className="flex flex-row w-full justify-between mt-3">
          <div className="flex flex-row items-center gap-x-2">
            <div
              onClick={handleDecreaseQty}
              className="p-1 bg-gray-100 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </div>
            <p className="text-sm font-medium">{data.qty}</p>
            <div
              onClick={handleIncreaseQty}
              className="p-1 bg-gray-100 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>

          {data.discount_percent > 0 ? (
            <div className="flex flex-row gap-3">
              <p className="text-gray-500 line-through">
                {data.qty * data.original_price}
              </p>
              <p>{data.qty * data.unit_price} Ks</p>
            </div>
          ) : (
            <p>{data.qty * data.unit_price} Ks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
