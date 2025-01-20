import Container from "@/customer-side/components/Container";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";
import HomeBrandTypeCard from "../../../components/HomeBrandTypeCard";

const BrandContainer = () => {
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
      link: "",
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <div className="col-span-full">
          <SectionTitle title="available brands" />
          <div className="grid grid-cols-4 gap-x-3 gap-y-6">
            {brands.map((brand, i) => (
              <HomeBrandTypeCard
                key={i}
                img={brand.img}
                link={`/brands/${brand.title}`}
                title={brand.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandContainer;
