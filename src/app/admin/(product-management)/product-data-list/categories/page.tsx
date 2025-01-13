import AdminCheck from "@/admin-side/components/AdminCheck";
import CategoryPage from "@/admin-side/features/product-management/product-data/page/CategoryPage";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"Product Management"}>
        <CategoryPage />
      </AdminCheck>
    </div>
  );
};

export default page;
