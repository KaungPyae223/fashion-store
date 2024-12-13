import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import React from "react";
import CategoryData from "../components/CategoryData";
import ColorsData from "../components/ColorsData";
import BrandData from "../components/BrandData";

const ProductDataPage = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <AdminSubTitle title="Types" />
          <CategoryData />
          <div className="mt-3 cursor-pointer text-sm p-2 px-6 bg-gray-800 text-white inline-block">
            Create Type
          </div>
        </div>
        <div>
          <AdminSubTitle title="Colors" />
          <ColorsData/>
          <div className="mt-3 cursor-pointer text-sm p-2 px-6 bg-gray-800 text-white inline-block">
            Create Color
          </div>
        </div>
        <div>
          <AdminSubTitle title="Brands" />
          <BrandData/>
          <div className="mt-3 cursor-pointer text-sm p-2 px-6 bg-gray-800 text-white inline-block">
            Create Brand
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataPage;
