import AdminCheck from "@/admin-side/components/AdminCheck";
import ProductCreateConfirmPage from "@/admin-side/features/product-management/product-list/page/ProductCreateConfirmPage";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"Product Management"}>
        <ProductCreateConfirmPage />
      </AdminCheck>
    </div>
  );
};

export default page;
