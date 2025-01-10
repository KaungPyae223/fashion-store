import React, { useEffect, useState } from "react";
import HomeCarouselController from "../components/HomeCarouselController";
import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import Link from "next/link";
import { fetchAllAds, fetchAllCarousels } from "@/admin-side/services/page";

const PageManagement = async () => {
  const adsData = await fetchAllAds();
  const ads = adsData.ads.split("/");

  const carouselData = await fetchAllCarousels();

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
      <HomeCarouselController carouselData={carouselData} />

      <hr></hr>
    </div>
  );
};

export default PageManagement;
