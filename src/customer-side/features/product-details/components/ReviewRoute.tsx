"use client";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { getCookie } from "react-use-cookie";

const ReviewRoute = () => {
  const router = useRouter();
  const pathName = usePathname();

  const AddParamsToURL = useAddParamsToURL();
  const user_token = getCookie("user_token");

  const goToReview = () => {
    if (user_token) {
      router.push(AddParamsToURL(`${pathName}/review`));
    }else {
      toast.error("Please Log In First");
      router.push("/authentication");
    }
  };

  return (
    <div className="flex items-center">
      <div
        onClick={goToReview}
        className="border border-gray-500 mx-auto px-8 py-2 text-sm hover:bg-gray-700 duration-300 hover:text-white cursor-pointer"
      >
        Write Review
      </div>
    </div>
  );
};

export default ReviewRoute;
