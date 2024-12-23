import PageTitle from "@/admin-side/components/PageTitle";
import ProductDataPage from "@/admin-side/features/product-data/page/ProductDataPage";
import React from "react";
import ProductDataAnimation from "@/assets/ProductDataAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Product Data List" subTitle="Manage Datas related to the Products" animate={ProductDataAnimation} />
      <ProductDataPage/>
    </div>
  );
};

export default page;
