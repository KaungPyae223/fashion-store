import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import React, { useEffect, useState } from "react";
import HomeCarouselPreview from "./HomeCarouselPreview.tsx";
import Link from "next/link.js";
import useSWR from "swr";
import { fetchHome } from "@/customer-side/services/HomePage.js";

const HomeCarouselController = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/carousels";

  const [carouselData, setCarousel] = useState([]);

  const { data, isLoading, error } = useSWR(url, fetchHome);

  useEffect(() => {
    if (!isLoading) {
      setCarousel(data);
    }
  }, [isLoading]);

  return (
    <div className="mt-6">
      <AdminSubTitle title={`Carousel ( ${carouselData.length} / 5 )`} />

      {carouselData.length >= 5 ? (
        <p className="text-sm text-red-500">
          You can only add up to 5 carousels.
        </p>
      ) : (
        <Link
          href={"/admin/page-management/carousel-create"}
          className="bg-gray-800 disabled:opacity-50 text-white w-fit py-2 px-9 cursor-pointer"
        >
          Create Carousel
        </Link>
      )}

      <div className="py-6 mt-3 flex flex-col gap-12">
        {carouselData.map((data, index) => {
          return (
            <HomeCarouselPreview key={data.id} index={index} data={data} />
          );
        })}
      </div>
    </div>
  );
};

export default HomeCarouselController;
