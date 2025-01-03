import React from "react";
import ProductReviewTable from "./ProductReviewTable";

const ProductReviews = () => {
  return (
    <div className="bg-white p-5 col-span-3">
      <p className="text-xl tracking-wider font-medium mb-5">
        Product reviews
      </p>
      <div className="mt-5">
        <ProductReviewTable />
      </div>
    </div>
  );
};

export default ProductReviews;
