import AdminPagination from "@/admin-side/components/AdminPagimation";
import React from "react";
import ProductTrashData from "./ProductTrashData";

const ProductTrashContainer = ({products}) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2">Product Data</th>

            <th className="text-start px-2">Category</th>
            <th className="text-start px-2">Brand</th>
            <th className="text-start px-2">Type</th>
            <th className="text-center px-2">Gender</th>
            <th className="text-end px-2">Price</th>
            <th className="px-4 text-start">Rating</th>
            <th className="px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <ProductTrashData key={product.id} product={product} />
            ))
          }
          
        </tbody>
      </table>
      
    </div>
  );
};

export default ProductTrashContainer;
