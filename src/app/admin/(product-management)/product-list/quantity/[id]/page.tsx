import ProductQuantityControlPage from "@/admin-side/features/product-management/product-list/page/ProductQuantityControlPage";
import React from "react";

const page = ({params:{id}}) => {
  return (
    <div>
      <ProductQuantityControlPage id={id} />
    </div>
  );
};

export default page;
