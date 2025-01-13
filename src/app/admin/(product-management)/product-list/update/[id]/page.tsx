import AdminCheck from "@/admin-side/components/AdminCheck";
import ProductUpdatePage from "@/admin-side/features/product-management/product-list/page/ProductUpdatePage";
import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <AdminCheck allow={"Product Management"}>
        <ProductUpdatePage id={id} />
      </AdminCheck>
    </div>
  );
};

export default page;
