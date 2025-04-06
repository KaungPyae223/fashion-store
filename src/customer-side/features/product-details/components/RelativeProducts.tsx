import React from "react";
import { HomeTitle } from "../../home/components/HomeTitle";
import ProductCard from "@/customer-side/components/ProductCard";

const RelativeProducts = ({ relativeProducts }) => {
  return (
    relativeProducts.length > 0 && (
      <div className="pt-24 pb-6 mb-12">
        <p className="text-2xl mb-9 font-medium">Relative Products</p>
        <div className="col-span-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-x-3 gap-y-6">
          {relativeProducts.map((product,i) => (
            <ProductCard
              index={i}
              key={product.id}
              img={product.cover_photo}
              title={product.name}
              color={product.color}
              amount={product.price}
              href={"/clothing/details/" + product.id}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default RelativeProducts;
