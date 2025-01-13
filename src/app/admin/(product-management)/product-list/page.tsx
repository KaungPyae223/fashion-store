import PageTitle from "@/admin-side/components/PageTitle";
import ProductListPage from "@/admin-side/features/product-management/product-list/page/ProductListPage";
import React from "react";
import ItemListAnimation from "@/assets/ItemListAnimation.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Product List"
        subTitle="Manage the Alexa products"
        animate={ItemListAnimation}
      />
      <AdminCheck allow={"Product Management"}>
        <ProductListPage />
      </AdminCheck>
    </div>
  );
};

export default page;
