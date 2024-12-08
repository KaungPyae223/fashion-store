import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";
import HomeBrandTypeCard from "../../../components/HomeBrandTypeCard";
import Image from "next/image";

const LifeStyle = () => {
  interface LifeStyleProductsInterface {
    img: string;
    title: string;
    color: string;
    amount: string;
  }

  const LifeStyleProducts: LifeStyleProductsInterface[] = [
    {
      img: "https://content.cylindo.com/api/v2/5084/products/INGEBORG/frames/30/INGEBORG.JPG?background=FFFFFF&feature=LEG%20FINISH:NATURAL%20OAK&feature=UPHOLSTERY:FIORD%20751",
      title: "Elegant Lounge Chair",
      color: "Silver",
      amount: "32000",
    },
    {
      img: "https://content.cylindo.com/api/v2/5084/products/BRASILIA%20LOUNGE%20CHAIR/frames/30/BRASILIA%20LOUNGE%20CHAIR.JPG?background=FFFFFF&feature=FRAME:NATURAL%20OAK&feature=UPHOLSTERY:SHEEPSKIN%20NATURE",
      title: "Cozy Sofa Set",
      color: "Silver",
      amount: "45000",
    },
    {
      img: "https://assets.wfcdn.com/im/5140046/resize-h800-w800%5Ecompr-r85/2551/255189687/Desk.jpg",
      title: "Minimalistic Desk",
      color: "Black",
      amount: "24000",
    },
    {
      img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Coffee Table",
      color: "White",
      amount: "30000",
    },
  ];

  return (
    <div className="py-16  mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Lifestyle" link="/life-style" />
        <div className="col-span-6">
          <img
            className="h-full w-full object-cover"
            alt="Life Style Photo"
            src="https://cdn.shopify.com/s/files/1/0255/2384/7243/files/floating_living_room_furniture_layout_1024x1024.jpg?v=1692691548"
          />
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-3">
          {LifeStyleProducts.map((product, i) => (
            <ProductCard
              key={i}
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
