import React from "react";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";
import Container from "../../../components/Container";

const Accessories = ({ data }) => {
  return (
    <div className="pt-16 pb-6 mb-12">
      <Container>
        <HomeTitle title="Accessories" link="accessories" />
        <div className="col-span-full grid grid-cols-2  lg:grid-cols-4 gap-y-6 gap-x-3 md:gap-x-6">
          {data.map((accessory,i) => (
            <ProductCard
              index={i}
              discount_percent={accessory.discount_percent}
              discount_price={accessory.discount_price}
              key={accessory.id}
              img={accessory.img}
              title={accessory.title}
              color={accessory.color}
              amount={accessory.amount}
              href={"/details/" + accessory.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Accessories;
