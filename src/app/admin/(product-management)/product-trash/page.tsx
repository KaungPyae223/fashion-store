import PageTitle from "@/admin-side/components/PageTitle";
import ProductTrashPage from "@/admin-side/features/product-management/product-trash/page/ProductTrashPage";
import React from "react";
import Trash from "@/assets/Trash.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Product Trash"
        subTitle="Deleted Products"
        animate={Trash}
      />
      <AdminCheck allow={"Product Management"}>
        <ProductTrashPage />
      </AdminCheck>
    </div>
  );
};

export default page;
