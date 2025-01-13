"use client";
import React, { useEffect, useState } from "react";
import HomeCarouselController from "../components/HomeCarouselController";
import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import Link from "next/link";
import useSWR from "swr";
import { fetchHome } from "@/customer-side/services/HomePage";

const PageManagement = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/ads";

  const [ads, setAds] = useState([]);

  const { data, isLoading, error } = useSWR(url, fetchHome);

  useEffect(() => {
    if (!isLoading) {
      setAds(data.ads.split("/"));
    }
  }, [isLoading]);

  return (
    <div>
      <div className="pb-6 border-b">
        <AdminSubTitle title={`Header Ads Control ( ${ads.length} / 12)`} />
        <div className="grid grid-cols-3 my-3 mb-8 ">
          {ads.length > 0 ? (
            ads.map((data) => (
              <div
                key={data}
                className="text-sm text-gray-700 p-3 bg-white border border-gray-300 "
              >
                {data}
              </div>
            ))
          ) : (
            <p>There is no Ads</p>
          )}
        </div>
        <Link
          href={"/admin/page-management/ads-control"}
          className="bg-gray-800 text-white w-fit py-2 px-12 mt-6 cursor-pointer"
        >
          Update Ads
        </Link>
      </div>
      <HomeCarouselController  />
    </div>
  );
};

export default PageManagement;
