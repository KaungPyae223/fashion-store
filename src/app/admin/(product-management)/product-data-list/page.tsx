import PageTitle from "@/admin-side/components/PageTitle";
import ProductDataPage from "@/admin-side/features/product-management/product-data/page/ProductDataPage";
import React from "react";
import ProductDataAnimation from "@/assets/ProductDataAnimation.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Product Data List"
        subTitle="Manage Datas related to the Products"
        animate={ProductDataAnimation}
      />
      <AdminCheck allow={"Product Management"}>
        <ProductDataPage />
      </AdminCheck>
    </div>
  );
};

export default page;
