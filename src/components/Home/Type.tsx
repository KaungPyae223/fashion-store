import React from "react";
import Container from "../GeneralComponent/Container";
import { HomeTitle } from "./HomeTitle";
import HomeBrandTypeCard from "./HomeBrandTypeCard";

const Type = () => {
  interface TypeInterface {
    img: string;
    title: string;
    link: string;
  }

  const brands: TypeInterface[] = [
    {
      img: "https://media.gq.com/photos/66340a79257eefedddef5281/master/w_1920,c_limit/best-white-sneakers.jpg",
      title: "Footwear",
      link: "/",
    },
    {
      img: "https://uwaterloo.ca/news/sites/ca.news/files/styles/feature_xl/public/perry-merrity-ii-gprji5r4rak-unsplash.jpg?itok=xN1GBCq0",
      title: "Clothes",
      link: "/",
    },
    {
      img: "https://asdonline.com/wp-content/uploads/2020/05/asdmarketweek-0528.jpg",
      title: "Accessories",
      link: "/",
    },
    {
      img: "https://ca.heys.com/cdn/shop/files/Luxe-Navy-26-inch-heys-luggage-lifestyle-image-3.jpg?v=1709584262&width=1000",
      title: "Lifestyle",
      link: "/",
    },
  ];

  return (
    <div className="py-16 mb-6 bg-[#F8F8F8]">
      <Container>
        <HomeTitle title="Types" />
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

export default Type;
