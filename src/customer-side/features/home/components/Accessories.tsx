import React from "react";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";
import Container from "../../../components/Container";

const Accessories = ({ data }) => {
  return (
    <div className="pt-16 pb-6 mb-12">
      <Container>
        <HomeTitle title="Accessories" link="accessories" />
        <div className="col-span-full grid grid-cols-3 gap-x-6">
          {data.map((accessory) => (
            <ProductCard
              key={accessory.id}
              img={accessory.img}
              title={accessory.title}
              amount={accessory.amount}
              color={accessory.color}
              href={"/accessories/details/" + accessory.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Accessories;
