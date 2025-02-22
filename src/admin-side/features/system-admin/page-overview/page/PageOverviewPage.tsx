"use client"
import HomePage from "@/customer-side/features/home/page/HomePage";
import useRemoveParam from "@/hooks/useRemoveParam";
import useUpdateParams from "@/hooks/useUpdateParams";
import { useSearchParams } from "next/navigation";
import React from "react";

const PageOverviewPage = () => {

    const updateParams = useUpdateParams();
    const deleteParam = useRemoveParam();
    const searchParams = useSearchParams();

    const gender = searchParams.get("gender");

  return (
    <div>
      <div>
        <div className="border-b mb-6 pb-6">
          <p className="text-lg font-medium uppercase tracking-widest">
            Page Overview
          </p>
          <div className="flex flex-row gap-3 mt-3">
            <div onClick={()=>deleteParam(["gender"])} className={`border border-gray-300 w-[100px] py-1.5 flex items-center justify-center text-gray-600 ${!gender && "bg-gray-800 text-white"} cursor-pointer`}>
              All
            </div>
            <div onClick={()=>updateParams({gender:"Men"})} className={`border border-gray-300 w-[100px] py-1.5 flex items-center justify-center text-gray-600 ${gender=="Men" && "bg-gray-800 text-white"} cursor-pointer`}>
              Men
            </div>
            <div onClick={()=>updateParams({gender:"Women"})} className={`border border-gray-300 w-[100px] py-1.5 flex items-center justify-center text-gray-600 ${gender=="Women" && "bg-gray-800 text-white"} cursor-pointer`}>
              Women
            </div>
          </div>
        </div>
        <div className="pointer-events-none">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default PageOverviewPage;
