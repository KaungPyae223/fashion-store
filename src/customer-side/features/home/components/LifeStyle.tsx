import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";
import Furniture from "@/assets/Furniture.jpg";
import Image from "next/image";

const LifeStyle = ({ data }) => {
  return (
    <div className="py-16  mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Lifestyle" link="/life-style" />
        <div className="col-span-6">
          <Image
            className="h-[500px] w-full object-cover"
            alt="Life Style Photo"
            width={1080}
            height={1920}
            src={Furniture}
          />
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-3">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              href={"/life-style/details/" + product.id}
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
