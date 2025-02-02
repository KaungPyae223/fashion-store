"use client";
import React, { useRef, useState } from "react";
import useProductStore from "@/admin-side/stores/useProductStore";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import { useForm } from "react-hook-form";

const ProductPriceUpdate = ({ setStage }) => {
  const [nextStage, setNextStage] = useState(1);
  const [sellPrice, setSellPrice] = useState(0);

  const {
    product: { productPrice },
    setProductPrice,
  } = useProductStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      Price: productPrice.Price,
      Profit: productPrice.Profit,
      SellPrice: productPrice.SellPrice,
    },
  });

  const changeSellPrice = () => {
    const priceValue = parseInt(watch("Price")) || 0;
    const profitValue = parseInt(watch("Profit")) || 0;
    const calculatedSellPrice = priceValue + profitValue * 0.01 * priceValue;

    setSellPrice(calculatedSellPrice);
  };

  const handleStoreProductData = (data) => {
    const addProductPrice = {
      Price: data.Price,
      Profit: data.Profit,
      SellPrice: sellPrice,
    };

    setProductPrice(addProductPrice);

    setStage(nextStage);
  };

  return (
    <div>
      <p className="text-2xl font-medium tracking-wide">Product Price Update</p>
      <form onSubmit={handleSubmit(handleStoreProductData)} className="mt-9">
        <div className="flex flex-col my-5">
          <label htmlFor={"Price"} className="text-sm text-gray-700 mb-2">
            Price *
          </label>
          <input
            id={"Price"}
            type={"number"}
            {...register("Price", {
              required: "Price is Required",
              onChange: changeSellPrice,
            })}
            className={`${
              errors.Price ? "border-red-500" : ""
            } outline-none py-2 h-11 px-3 border border-gray-300 w-[400px]`}
          />
          {errors.Price && <FormErrorMessage message={errors.Price.message} />}
        </div>
        <div className="flex flex-col my-5">
          <label
            htmlFor={"Profit Percent"}
            className="text-sm text-gray-700 mb-2"
          >
            Profit Percent *
          </label>
          <input
            id={"Profit Percent"}
            type={"number"}
            {...register("Profit", {
              required: "Profit Percent is Required",
              onChange: changeSellPrice,
            })}
            className={`${
              errors.Profit ? "border-red-500" : ""
            } outline-none py-2 h-11 px-3 border border-gray-300 w-[400px]`}
          />
          {errors.Profit && (
            <FormErrorMessage message={errors.Profit.message} />
          )}
        </div>

        <div className="flex flex-col my-5">
          <label htmlFor={"Sell Price"} className="text-sm text-gray-700 mb-2">
            Sell Price
          </label>
          <input
            disabled={true}
            type={"number"}
            value={sellPrice}
            {...register("SellPrice")}
            className="outline-none py-2 h-11 px-3 border border-gray-300 w-[400px]"
          />
        </div>

        <div className="flex mt-6 flex-row items-center justify-end w-[400px] gap-3">
          <button
            onClick={() => setNextStage(2)}
            type="submit"
            className="px-9 py-2 border border-gray-800 "
          >
            Back
          </button>

          <button
            onClick={() => setNextStage(4)}
            type="submit"
            className="px-9 py-2 bg-gray-800 text-white"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductPriceUpdate;
