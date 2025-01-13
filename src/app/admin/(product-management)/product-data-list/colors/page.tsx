import AdminCheck from "@/admin-side/components/AdminCheck";
import ColorPage from "@/admin-side/features/product-management/product-data/page/ColorPage";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"Product Management"}>
        <ColorPage />
      </AdminCheck>
    </div>
  );
};

export default page;
