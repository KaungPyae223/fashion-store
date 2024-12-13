import React from "react";
import HomeHero from "@/customer-side/features/home/components/HomeHero";
import Latest from "@/customer-side/features/home/components/Latest";
import HomeBrand from "@/customer-side/features/home/components/HomeBrand";
import Sneaker from "@/customer-side/features/home/components/Sneaker";
import Type from "@/customer-side/features/home/components/Type";
import Trending from "@/customer-side/features/home/components/Trending";
import Accessories from "@/customer-side/features/home/components/Accessories";
import LifeStyle from "@/customer-side/features/home/components/LifeStyle";
import HomeBlog from "@/customer-side/features/home/components/HomeBlog";
import "../../../../styles/globals.css"

const HomePage = () => {
  return (
    <div className="bg-white">
      <HomeHero />
      <Latest />
      <HomeBrand />
      <Sneaker />
      <Type />
      <Trending />
      <Accessories />
      <LifeStyle />
      <HomeBlog />
    </div>
  );
};

export default HomePage;
