import ProductCard from "@/customer-side/components/ProductCard";
import React from "react";

const ProductCardContainer = ({ data }) => {
  return (
    <div className="bg-white p-5 pointer-events-none">
      <p className="text-xl tracking-wider font-medium mb-5">Product Card</p>
      <ProductCard
        img={data.cover_photo}
        title={data.name}
        color={data.color}
        amount={data.price}
        href="/"
      />
    </div>
  );
};

export default ProductCardContainer;
