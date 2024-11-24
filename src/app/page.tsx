import React from "react";
import "./globals.css";
import HomeHero from "@/components/Home/HomeHero";
import Latest from "@/components/Home/Latest";
import HomeBrand from "@/components/Home/HomeBrand";
import Sneaker from "@/components/Home/Sneaker";
import Type from "@/components/Home/Type";
import Trending from "@/components/Home/Trending";
import Accessories from "@/components/Home/Accessories";
import LifeStyle from "@/components/Home/LifeStyle";
import HomeBlog from "@/components/Home/HomeBlog";

const Home = () => {
  return (
    <div>
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

export default Home;
