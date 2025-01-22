import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import HomeBrandTypeCard from "../../../components/HomeBrandTypeCard";

const HomeBrand = ({ data }) => {
  return (
    <div className="py-16 mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Our Official Partner Brands" link="brands" />
        <div className="col-span-full grid grid-cols-4 gap-6">
          {data.map((brand) => (
            <HomeBrandTypeCard
              key={brand.id}
              img={brand.photo}
              link={"/brands/" + brand.name}
              title={brand.name}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomeBrand;
