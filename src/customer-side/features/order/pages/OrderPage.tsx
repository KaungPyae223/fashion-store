"use client";
import Container from "@/customer-side/components/Container";
import { useRouter } from "next/navigation";
import React from "react";
import OrderInformationInput from "../components/OrderInformationInput";
import OrderSummary from "../components/OrderSummary";
import { getCookie } from "react-use-cookie";
import useCraftStore from "@/customer-side/stores/useCraftStore";

const OrderPage = () => {
  const Router = useRouter();

  const token = getCookie("user_token");

  const { data } = useCraftStore();

  const subTotal = data.reduce((total, product) => {
    return total + product.original_price * product.qty;
  }, 0);

  const discountTotal = data.reduce((total, product) => {
    return total + product.discount_amount * product.qty;
  }, 0);

  const tax = Math.ceil((subTotal - discountTotal) * 0.05);

  if (!token) {
    Router.push("/authentication");
  }

  if (data.length == 0) {
    Router.push("/");
  }

  const routeBack = () => {
    Router.back();
  };

  return (
    <div className="py-10">
      <Container>
        <div className=" pb-3 border-b col-span-full flex items-center justify-between">
          <div
            onClick={routeBack}
            className="flex flex-1 text-xl flex-row gap-3 items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            Back
          </div>

          <p className="text-xl flex-1 uppercase text-end font-medium tracking-wider">
            Order The Products
          </p>
        </div>
        <div className="grid col-span-full grid-cols-2 mt-3 gap-20">
          <OrderInformationInput />
          <OrderSummary subTotal={subTotal} discountTotal={discountTotal} tax={tax} data={data} />
        </div>
      </Container>
    </div>
  );
};

export default OrderPage;
