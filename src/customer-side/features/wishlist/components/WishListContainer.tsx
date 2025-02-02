"use client";
import React from "react";
import WishCard from "./WishCard";
import useSWR from "swr";
import { fetchCustomer } from "@/customer-side/services/HomePage";
import WhishListAnimation from "@/assets/WhishListAnimation.json";
import Lottie from "lottie-react";
import Loading from "@/admin-side/components/Loading";

const WishListContainer = () => {
  const { isLoading, data } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/customer-wishlist",
    fetchCustomer
  );

  console.log(data)

  return isLoading ? (
    <Loading />
  ) : data.length > 0 ? (
    <div className="mt-6 grid grid-cols-5 gap-6 gap-y-12">

      {data.map((data) => (
        <WishCard
          id={data.id}
          img={data.image}
          title={data.name}
          color={data.color}
          amount={data.price}
          discount_price={data.discount_price}
          discount_percent={data.discount_percent}
          key={data.id}
          product_id={data.product_id}
        />
      ))}
    </div>
  ) : (
    <NoData />
  );
};

const NoData = () => {
  return (
    <div className="pb-12 flex flex-col justify-center items-center">
      <Lottie animationData={WhishListAnimation} className="w-1/3" />
      <p className="mt-6 text-xl font-medium">
        Please Select a Product Do You Like
      </p>
    </div>
  );
};

export default WishListContainer;
