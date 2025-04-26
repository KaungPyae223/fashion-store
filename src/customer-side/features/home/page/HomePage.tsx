"use client";
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
import { fetchHome } from "@/customer-side/services/HomePage";
import useSWR from "swr";
import Loading from "@/admin-side/components/Loading";
import { useSearchParams } from "next/navigation";

const HomePage = () => {
  const gender = useSearchParams().get("gender");

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/home?gender= ${
    gender ? gender : ""
  }
    `;

  const { data, isLoading, error } = useSWR(url, fetchHome);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="bg-white">
        {data?.hero && <HomeHero gender={gender} data={data.hero} />}
        {data?.latest && <Latest gender={gender} data={data.latest} />}
        {data?.brand && <HomeBrand gender={gender} data={data.brand} />}
         {data?.sneakers && <Sneaker gender={gender} data={data.sneakers} />}
        <Type gender={gender} />
        {data?.trending && <Trending gender={gender} data={data.trending} />}
        {data?.accessories && <Accessories gender={gender} data={data.accessories} />}
        {data?.lifeStyle && <LifeStyle gender={gender} data={data.lifeStyle} />}
        {data?.blogs && <HomeBlog gender={gender}  data={data.blogs} />} 
      </div>
    );
  }
};

export default HomePage;
