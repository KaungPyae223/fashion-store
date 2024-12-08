"use client";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ReviewRoute = () => {
  const router = useRouter();
  const pathName = usePathname();

  const AddParamsToURL = useAddParamsToURL();

  const goToReview = () => {
    router.push(AddParamsToURL(`${pathName}/review`));
  };

  return (
    <div className="flex items-center">
      <div
        onClick={goToReview}
        className="border mt-12 border-gray-500 mx-auto px-16 py-3 cursor-pointer"
      >
        Write Review
      </div>
    </div>
  );
};

export default ReviewRoute;
