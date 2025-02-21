import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";
import Furniture from "@/assets/Furniture.jpg";
import Image from "next/image";
import { url } from "inspector";

const LifeStyle = ({ data }) => {
  return (
    <div className="py-16  mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Lifestyle" link="/life-style" />
        <div
          className="col-span-6 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${Furniture.src})` }}
        />

        <div className="col-span-6 grid grid-cols-2 gap-3">
          {data.map((product) => (
            <ProductCard
              discount_percent={product.discount_percent}
              discount_price={product.discount_price}
              key={product.id}
              href={"/details/" + product.id}
              img={product.img}
              title={product.title}
              color={product.color}
              amount={product.amount}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LifeStyle;
