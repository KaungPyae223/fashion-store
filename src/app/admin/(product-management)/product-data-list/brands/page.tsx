import AdminCheck from "@/admin-side/components/AdminCheck";
import BrandPage from "@/admin-side/features/product-management/product-data/page/BrandPage";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"Product Management"}>
        <BrandPage />
      </AdminCheck>
    </div>
  );
};

export default page;
