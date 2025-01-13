import AdminCheck from "@/admin-side/components/AdminCheck";
import TypePage from "@/admin-side/features/product-management/product-data/page/TypePage";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"Product Management"}>
        <TypePage />
      </AdminCheck>
    </div>
  );
};

export default page;
