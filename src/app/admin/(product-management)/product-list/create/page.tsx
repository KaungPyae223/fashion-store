import AdminCheck from "@/admin-side/components/AdminCheck";
import ProductCreatePage from "@/admin-side/features/product-management/product-list/page/ProductCreatePage";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"Product Management"}>
        <ProductCreatePage />
      </AdminCheck>
    </div>
  );
};

export default page;
