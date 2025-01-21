"use client";
import Heros from "@/customer-side/components/Heros";
import React, { useEffect, useState } from "react";
import BrandClothesContainer from "../components/BrandClothesContainer";
import useSWR from "swr";
import { fetchHome } from "@/customer-side/services/HomePage";
import { useSearchParams } from "next/navigation";

const BrandDetailsPage = ({ name }: { name: string }) => {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");

  const [fetchURL, setFetchUrl] = useState(
    process.env.NEXT_PUBLIC_BASE_URL +
      "/brand-filter/" +
      name +
      "?gender=" +
      gender
  );

  const { data, isLoading } = useSWR(fetchURL, fetchHome);

  useEffect(() => {
    setFetchUrl(
      process.env.NEXT_PUBLIC_BASE_URL +
        "/brand-filter/" +
        name +
        "?gender=" +
        gender
    );
  }, [gender]);

  return (
    !isLoading && (
      <div>
        <Heros
          image={data.brand_image}
          previousSection={[
            { title: "Home", link: "/" },
            { title: "Brands", link: "/brands" },
          ]}
          title={name}
        />
        <BrandClothesContainer filterData={data.filerData} name={name} />
      </div>
    )
  );
};

export default BrandDetailsPage;
