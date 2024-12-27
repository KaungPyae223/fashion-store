import PageTitle from "@/admin-side/components/PageTitle";
import ProductListPage from "@/admin-side/features/product-management/product-list/page/ProductListPage";
import React from "react";
import ItemListAnimation from "@/assets/ItemListAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Product List"
        subTitle="Manage the Alexa products"
        animate={ItemListAnimation}
      />
      <ProductListPage />
    </div>
  );
};

export default page;
