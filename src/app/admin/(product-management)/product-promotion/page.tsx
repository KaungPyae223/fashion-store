import AdminCheck from "@/admin-side/components/AdminCheck";
import PageTitle from "@/admin-side/components/PageTitle";
import ProductPromotionPage from "@/admin-side/features/product-management/product-promotion/page/ProductPromotionPage";
import DiscountAnimation from "@/assets/WhishListAnimation.json";

import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Product List"
        subTitle="Manage the Products Promotions"
        animate={DiscountAnimation}
      />
      <AdminCheck allow={"Product Management"}>
        <ProductPromotionPage />
      </AdminCheck>
    </div>
  );
};

export default page;
