import React from "react";
import { HomeTitle } from "./HomeTitle";
import Container from "../../../components/Container";
import ProductCard from "../../../components/ProductCard";

const Trending = ({ data }) => {
  return (
    <div className="pt-16 pb-6 mb-6">
      <Container>
        <HomeTitle title="Trending Clothes" link="clothing" />
        <div className="col-span-full grid grid-cols-5 gap-x-3 gap-y-6">
          {data.map((product, i) => (
            <ProductCard
              discount_percent={product.discount_percent}
              discount_price={product.discount_price}
              key={product.id}
              img={product.img}
              title={product.title}
              color={product.color}
              amount={product.amount}
              href={"/details/" + product.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Trending;
