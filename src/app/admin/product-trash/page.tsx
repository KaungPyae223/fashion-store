import PageTitle from "@/admin-side/components/PageTitle";
import ProductTrashPage from "@/admin-side/features/product-trash/page/ProductTrashPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Product Trash" />
      <ProductTrashPage />
    </div>
  );
};

export default page;
