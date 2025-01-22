import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";

const Sneaker = ({ data }) => {
  return (
    <div className="pt-16 pb-6 mb-12">
      <Container>
        <HomeTitle title="New Sneakers" link="footwears" />
        <div className="col-span-full grid grid-cols-3 gap-x-6">
          {data.map((sneaker, i) => (
            <ProductCard
              key={sneaker.id}
              img={sneaker.img}
              title={sneaker.title}
              amount={sneaker.amount}
              color={sneaker.color}
              href={"/footwears/details/" + sneaker.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Sneaker;
