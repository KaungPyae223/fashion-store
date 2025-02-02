import React from "react";
import SearchProductCard from "./SearchProductCard";

const SearchProducts = ({ data, q }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {data.map((SearchProduct) => (
        <SearchProductCard
          discount_percent={SearchProduct.discount_percent}
          discount_price={SearchProduct.discount_price}
          q={q}
          id={SearchProduct.id}
          key={SearchProduct.id}
          img={SearchProduct.cover_photo}
          brand={SearchProduct.brand}
          title={SearchProduct.name}
          amount={SearchProduct.price}
          
        />
      ))}
    </div>
  );
};

export default SearchProducts;
