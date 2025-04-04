"use client";
import React, { SetStateAction } from "react";
import CraftCard from "./CraftCard";
import { PiFlowerLotusThin } from "react-icons/pi";
import Lottie from "lottie-react";
import CraftAnimation from "@/assets/CraftAnimation.json";
import useCraftStore from "@/customer-side/stores/useCraftStore";
import { useRouter } from "next/navigation";
import { getCookie } from "react-use-cookie";

interface CraftInterface {
  setOpenCraft: React.Dispatch<SetStateAction<boolean>>;
}

const Craft = ({ setOpenCraft }: CraftInterface) => {
  const { data } = useCraftStore();

  const router = useRouter();

  const subTotal = data.reduce((total, product) => {
    return total + product.original_price * product.qty;
  }, 0);

  const discountTotal = data.reduce((total, product) => {
    return total + product.discount_amount * product.qty;
  }, 0);

  const routeOrder = () => {
    const user_token = getCookie("user_token");

    if (data.length > 0 && user_token) {
      router.push("/order");
    } else {
      router.push("/authentication");
    }
  };

  const tax = Math.ceil((subTotal - discountTotal) * 0.05);

  return (
    <div className="h-screen flex flex-col z-50 bg-white max-w-[390px] w-full">
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
          Your Craft ({data.length})
        </p>

        <div></div>
      </div>
      <div className="flex-1 overflow-y-auto px-5">
        {data.length > 0 ? (
          <ProductGenerate CraftProducts={data} />
        ) : (
          <NoCraftData />
        )}
      </div>
      <div className="mt-auto p-5 border-t">
        <div className="flex items-center mb-1 text-sm justify-between">
          <p>Sub total:</p>
          <p>{subTotal} Ks</p>
        </div>
        <div className="flex items-center mb-1 text-sm justify-between">
          <p>Discount total:</p>
          <p>{discountTotal} Ks</p>
        </div>

        <div className="flex items-center mb-3 text-sm justify-between">
          <p>Tax:</p>
          <p>{tax} Ks</p>
        </div>

        <div className="flex items-center font-medium mb-6 justify-between">
          <p>Total:</p>
          <p>{subTotal + tax - discountTotal} Ks</p>
        </div>
        <div
          onClick={routeOrder}
          className="p-3 bg-black text-white flex items-center justify-center font-medium cursor-pointer"
        >
          Make Order
        </div>
      </div>
    </div>
  );
};

const ProductGenerate = ({ CraftProducts }) => {
  return (
    <>
      {CraftProducts.map((product) => (
        <CraftCard product={product} key={product.id + product.size} />
      ))}
    </>
  );
};

const NoCraftData = () => {
  return (
    <div>
      <Lottie animationData={CraftAnimation} />
    </div>
  );
};

export default Craft;
