import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";
import ProductRating from "@/customer-side/components/ProductRating";

const Latest = ({ data }) => {
  return (
    <div className="pt-16 pb-6 mb-12">
      <Container>
        <HomeTitle title="Latest Clothes" link="clothing" />
        <div className="col-span-full grid grid-cols-5 gap-x-3 gap-y-6">
          {data.map((product) => (
            <ProductCard
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

export default Latest;
