import AdminCheck from "@/admin-side/components/AdminCheck";
import AdminProductDetailsPage from "@/admin-side/features/product-management/product-list/page/AdminProductDetailsPage";
import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <AdminCheck allow={"Product Management"}>
      <AdminProductDetailsPage id={id} />
    </AdminCheck>
  );
};

export default page;
