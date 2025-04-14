import React from "react";
import ProductPromotionTr from "./ProductPromotionTr";

const ProductPromotionContainer = ({
  products,
  selectedProducts,
  setSelectedProducts,
}) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="px-2">Check</th>
            <th className="text-start px-2">Product Data</th>
            <th className="text-end px-2">Quantity</th>
            <th className="text-end px-2">Price </th>
            <th className="text-end px-2">Discount %</th>
            <th className="text-end px-2">Discount </th>
            <th className="text-center px-2">Start Date</th>
            <th className="text-center px-2">End Date</th>
            <th className="text-end px-2">Profit</th>
            <th className="text-end px-2">Selling Price </th>
            <th className="text-end px-2">Promotion Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductPromotionTr
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              product={product}
              key={product.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPromotionContainer;
