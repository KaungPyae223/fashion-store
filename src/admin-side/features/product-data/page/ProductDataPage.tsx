import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import React from "react";
import CategoryData from "../components/CategoryData";
import ColorsData from "../components/ColorsData";
import BrandData from "../components/BrandData";
import SizeData from "../components/SizeData";

const ProductDataPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 border border-gray-300 ">
        <div className="border border-gray-300  p-3">
          <div className="flex flex-row gap-3 items-center">
            <AdminSubTitle title="Types" />
          </div>
          <CategoryData />
          <div className="mt-3 cursor-pointer text-sm p-2 px-6 bg-gray-800 text-white inline-block">
            Create Type
          </div>
        </div>
        <div className="border border-gray-300 p-3">
          <AdminSubTitle title="Colors" />
          <ColorsData />
          <div className="mt-3 cursor-pointer text-sm p-2 px-6 bg-gray-800 text-white inline-block">
            Create Color
          </div>
        </div>
        <div className="border border-gray-300 p-3">
          <AdminSubTitle title="Brands" />
          <BrandData />
          <div className="mt-3 cursor-pointer text-sm p-2 px-6 bg-gray-800 text-white inline-block">
            Create Brand
          </div>
        </div>
        <div className="p-3 border border-gray-300">
          <AdminSubTitle title="Sizes" />
          <SizeData />
          <div className="mt-3 cursor-pointer text-sm p-2 px-6 bg-gray-800 text-white inline-block">
            Create Size
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataPage;
