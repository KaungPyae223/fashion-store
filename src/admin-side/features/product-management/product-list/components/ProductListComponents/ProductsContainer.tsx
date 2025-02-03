import React from "react";
import ProductListData from "./ProductListData";

const ProductsContainer = ({ products }) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2">Product Data</th>
            <th className="text-start px-2">Color</th>

            <th className="text-start px-2">Category</th>
            <th className="text-start px-2">Brand</th>
            <th className="text-start px-2">Type</th>
            <th className="text-center px-2">Gender</th>
            <th className="text-end px-2">Price</th>
            <th className="text-end px-2">Profit</th>
            <th className="text-end px-2">Discount</th>
            <th className="text-end px-2">Sell</th>
            <th className="text-end px-2">Stock</th>
            <th className="px-2 text-center">Status</th>
            <th className="px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductListData key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsContainer;
