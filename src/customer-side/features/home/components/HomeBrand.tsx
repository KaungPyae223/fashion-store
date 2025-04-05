import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import HomeBrandCard from "../../../components/HomeBrandCard";

const HomeBrand = ({ data }) => {
  return (
    <div className="py-16 mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Our Official Partner Brands" link="brands" />
        <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3 lg:gap-x-6">
          {data.map((brand) => (
            <HomeBrandCard
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
