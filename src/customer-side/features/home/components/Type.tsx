import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import HomeBrandTypeCard from "../../../components/HomeBrandTypeCard";
import Clothing from "@/assets/Clothing.jpg";
import Footwear from "@/assets/FootwearType.jpg";
import AccessoriesImage from "@/assets/AccessoriesType.jpg";
import LifeStyleType from "@/assets/LifeStyleType.jpg";




const Type = () => {
  return (
    <div className="py-16 mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Categories" />
        <div className="col-span-full grid grid-cols-4 gap-6">
          <HomeBrandTypeCard
            img={Clothing}
            link={"/clothing"}
            title={"Clothing"}
          />
          <HomeBrandTypeCard
            img={Footwear}
            link={"/foot-wear"}
            title={"Footwear"}
          />
          <HomeBrandTypeCard
            img={AccessoriesImage}
            link={"/accessories"}
            title={"Accessories"}
          />
          <HomeBrandTypeCard
            img={LifeStyleType}
            link={"/life-style"}
            title={"Life Style"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Type;
