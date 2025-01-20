import AdminCheck from "@/admin-side/components/AdminCheck";
import React from "react";
import ProductUpdateConfirmPage from "@/admin-side/features/product-management/product-list/page/ProductUpdateConfirmPage";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <AdminCheck allow={"Product Management"}>
      <ProductUpdateConfirmPage id={id} />
    </AdminCheck>
  );
};

export default page;
