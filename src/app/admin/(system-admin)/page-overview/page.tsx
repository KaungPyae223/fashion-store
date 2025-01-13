import AdminCheck from "@/admin-side/components/AdminCheck";
import HomePage from "@/customer-side/features/home/page/HomePage";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="border-b mb-6 pb-6">
        <p className="text-lg font-medium uppercase tracking-widest">
          Page Overview
        </p>
        <div className="flex flex-row gap-3 mt-3">
          <div className="border w-[100px] py-1.5 flex items-center justify-center text-gray-500 cursor-pointer">
            All
          </div>
          <div className="border w-[100px] py-1.5 flex items-center justify-center text-gray-500 cursor-pointer">
            Men
          </div>
          <div className="border w-[100px] py-1.5 flex items-center justify-center text-black border-black cursor-pointer">
            Women
          </div>
        </div>
      </div>
      <AdminCheck allow={"System Admin"}>
        <HomePage />
      </AdminCheck>
    </div>
  );
};

export default page;
