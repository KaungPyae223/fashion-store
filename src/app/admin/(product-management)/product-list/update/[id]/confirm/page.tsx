import AdminProductDetailsPage from "@/admin-side/features/product-management/product-list/page/AdminProductDetailsPage";
import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return <AdminProductDetailsPage id={id} />;
};

export default page;
