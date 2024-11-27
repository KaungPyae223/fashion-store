import Pagination from "@/customer-side/components/Pagination";
import ProductCard from "@/customer-side/components/ProductCard";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";

const FootwearDisplaySection = () => {
  interface footwear {
    img: string;
    title: string;
    color: string;
    amount: string;
  }

  const footwears: footwear[] = [
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
    <div>
      <SectionTitle title="footwears" />
      <div className="grid grid-cols-2 gap-x-3 gap-y-6">
        {footwears.map((product, i) => (
          <ProductCard
            key={i}
            img={product.img}
            title={product.title}
            color={product.color}
            amount={product.amount}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default FootwearDisplaySection;
