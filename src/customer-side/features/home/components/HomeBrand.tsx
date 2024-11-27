import React from "react";
import Container from "../../../components/Container";
import { HomeTitle } from "./HomeTitle";
import HomeBrandTypeCard from "../../../components/HomeBrandTypeCard";

const HomeBrand = () => {
  interface BrandInterface {
    img: string;
    title: string;
    link: string;
  }

  const brands: BrandInterface[] = [
    {
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*7MJoxgoEQBW-IMEMklTdVg.jpeg",
      title: "Nike",
      link: "/",
    },
    {
      img: "https://standfirst-designweek-production.imgix.net/uploads/2019/06/27172619/3_adidas_originals.jpg?fit=crop&crop=faces&q=80&auto=compress,format&w=750&h=527&dpr=1.25",
      title: "Adidas",
      link: "/",
    },
    {
      img: "https://www.logo.wine/a/logo/Louis_Vuitton/Louis_Vuitton-Logo.wine.svg",
      title: "Louis Vuitton",
      link: "/",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*7MJoxgoEQBW-IMEMklTdVg.jpeg",
      title: "Nike",
      link: "/",
    },
  ];

  return (
    <div className="py-16 mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Our Official Partner Brands" />
        <div className="col-span-12 grid grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <HomeBrandTypeCard
              key={i}
              img={brand.img}
              link={brand.link}
              title={brand.title}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomeBrand;
