import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";

const Sneaker = ({ data }) => {
  return (
    <div className="pt-16 pb-6 mb-12">
      <Container>
        <HomeTitle title="New Sneakers" link="footwears" />
        <div className="col-span-full grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-3 md:gap-x-6">
          {data.map((sneaker) => (
            <ProductCard
              discount_percent={sneaker.discount_percent}
              discount_price={sneaker.discount_price}
              key={sneaker.id}
              img={sneaker.img}
              title={sneaker.title}
              amount={sneaker.amount}
              color={sneaker.color}
              href={"/details/" + sneaker.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Sneaker;
