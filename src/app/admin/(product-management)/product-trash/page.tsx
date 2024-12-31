import PageTitle from "@/admin-side/components/PageTitle";
import ProductTrashPage from "@/admin-side/features/product-management/product-trash/page/ProductTrashPage";
import React from "react";
import Trash from "@/assets/Trash.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Product Trash" subTitle="Deleted Products" animate={Trash}/>
      <ProductTrashPage />
    </div>
  );
};

export default page;
