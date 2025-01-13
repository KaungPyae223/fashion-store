import AdminCheck from "@/admin-side/components/AdminCheck";
import SizePage from "@/admin-side/features/product-management/product-data/page/SizePage";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"Product Management"}>
        <SizePage />
      </AdminCheck>
      
    </div>
  );
};

export default page;
