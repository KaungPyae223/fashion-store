import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";

const Sneaker = () => {
  interface SneakerInterface {
    img: string;
    title: string;
    color: string;
    amount: string;
  }

  const NewSneakers: SneakerInterface[] = [
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62819db5-c5c6-4757-930b-9a305b2d628d/NIKE+DUNK+LOW+RETRO.png",
      title: "Nike Dunk Low Retro",
      color: "Pink",
      amount: "230000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee277c7b-7765-4b8a-bbc6-3393ea7c0631/AIR+MAX+270.png",
      title: "Nike Air Max 270",
      color: "Yellow",
      amount: "550000",
    },
    {
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/pdg9dvv1nliv7ydhck1r/NIKE+FREE+RN+2018.png",
      title: "Nike Free Run 2018",
      color: "White",
      amount: "195000",
    },
  ];

  return (
    <div className="pt-16 pb-6 mb-12">
      <Container>
        <HomeTitle title="New Sneakers" />
        <div className="col-span-12 grid grid-cols-3 gap-x-6">
          {NewSneakers.map((sneaker, i) => (
            <ProductCard
              key={i}
              img={sneaker.img}
              title={sneaker.title}
              amount={sneaker.amount}
              color={sneaker.color}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Sneaker;
