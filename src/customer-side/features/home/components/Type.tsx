import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import Clothing from "@/assets/Clothing.jpg";
import Footwear from "@/assets/FootwearType.jpg";
import AccessoriesImage from "@/assets/AccessoriesType.jpg";
import LifeStyleType from "@/assets/LifeStyleType.jpg";
import HomeTypeCard from "./HomeTypeCard";

const Type = ({gender}) => {
  return (
    <div className="py-16 mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Categories" />
        <div className="col-span-full grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3 lg:gap-x-6">
          <HomeTypeCard
            img={Clothing}
            link={"/clothing"+(gender ? "?gender=" + gender : "")}
            title={"Clothing"}
          />
          <HomeTypeCard
            img={Footwear}
            link={"/foot-wear"+(gender ? "?gender=" + gender : "")}
            title={"Footwear"}
          />
          <HomeTypeCard
            img={AccessoriesImage}
            link={"/accessories"+(gender ? "?gender=" + gender : "")}
            title={"Accessories"}
          />
          <HomeTypeCard
            img={LifeStyleType}
            link={"/life-style"+(gender ? "?gender=" + gender : "")}
            title={"Life Style"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Type;
