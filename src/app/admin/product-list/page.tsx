import ProductListPage from "@/admin-side/features/product-list/page/ProductListPage";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="border-b mb-6 pb-6">
        <p className="text-lg font-medium uppercase tracking-widest">
          Product List
        </p>
      </div>
      <ProductListPage />
    </div>
  );
};

export default page;
