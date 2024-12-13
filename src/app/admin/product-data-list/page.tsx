import PageTitle from "@/admin-side/components/PageTitle";
import ProductDataPage from "@/admin-side/features/product-data/page/ProductDataPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Product Data List" />
      <ProductDataPage/>
    </div>
  );
};

export default page;
