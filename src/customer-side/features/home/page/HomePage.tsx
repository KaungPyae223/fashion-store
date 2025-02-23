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
        {data?.hero && <HomeHero data={data.hero} />}
        {data?.latest && <Latest data={data.latest} />}
        {data?.brand && <HomeBrand data={data.brand} />}
        {data?.sneakers && <Sneaker data={data.sneakers} />}
        <Type />
        {data?.trending && <Trending data={data.trending} />}
        {data?.accessories && <Accessories data={data.accessories} />}
        {data?.lifeStyle && <LifeStyle data={data.lifeStyle} />}
        {data?.blogs && <HomeBlog  data={data.blogs} />}
              
      </div>
    );
  }
};

export default HomePage;
