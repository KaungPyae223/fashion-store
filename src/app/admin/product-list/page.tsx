import PageTitle from "@/admin-side/components/PageTitle";
import ProductListPage from "@/admin-side/features/product-list/page/ProductListPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Product List" />
      <ProductListPage />
    </div>
  );
};

export default page;
