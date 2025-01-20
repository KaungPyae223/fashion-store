import React from "react";
import { HomeTitle } from "./HomeTitle";
import ProductCard from "../../../components/ProductCard";
import Container from "../../../components/Container";

const Accessories = () => {
  interface AccessoriesInterface {
    img: string;
    title: string;
    color: string;
    amount: string;
  }

  const Accessories: AccessoriesInterface[] = [
    {
      img: "https://mygemma.com/cdn/shop/articles/Copy_of_myGemma_Blog_Featured_Image-26_b837bc6c-b35e-48df-888f-826051683fe6.png?v=1696256791",
      title: "LV Bag",
      color: "Gold",
      amount: "2300000",
    },
    {
      img: "https://glassyeyewear.com/cdn/shop/products/MikemoPrescription-MatteBlackoutClear_34_Shopify.jpg?v=1621020662&width=800",
      title: "Nike Air Max 270",
      color: "Yellow",
      amount: "550000",
    },
    {
      img: "https://cdn.watchswiss.com/wp-content/uploads/2018/12/Images_0015_als-142-031-sl02-zeitwerk-2022.png",
      title: "Nike Free Run 2018",
      color: "White",
      amount: "195000",
    },
  ];

  return (
    <div className="pt-16 pb-6 mb-12">
      <Container>
        <HomeTitle title="Accessories" link="accessories" />
        <div className="col-span-full grid grid-cols-3 gap-x-6">
          {Accessories.map((accessory, i) => (
            <ProductCard
              key={i}
              img={accessory.img}
              title={accessory.title}
              amount={accessory.amount}
              color={accessory.color}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Accessories;
