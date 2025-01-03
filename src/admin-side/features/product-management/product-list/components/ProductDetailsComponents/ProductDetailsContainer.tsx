import React from "react";
import ProductDetailsTable from "./ProductDetailsTable";
import ProductSaleColumnChart from "./ProductSaleColumnChart";
import ProductAverageRating from "./ProductAverageRating";
import ProductCardContainer from "./ProductCardContainer";
import ProductDetailsPreview from "./ProductDetailsPreview";
import ProductReviews from "./ProductReviews";

const ProductDetailsContainer = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      <ProductDetailsTable data={data} />
      <ProductSaleColumnChart data={data} />
      <ProductAverageRating/>
      <ProductCardContainer data={data}/>
      <ProductDetailsPreview data={data} />
      <ProductReviews/>
    </div>
  )
};

export default ProductDetailsContainer;
