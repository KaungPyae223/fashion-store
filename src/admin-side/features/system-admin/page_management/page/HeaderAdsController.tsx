"use client"
import React from "react";
import { useAdsController } from "../hook/useAdsController";

const HeaderAdsController = () => {
  const { ads, handleUpdateAds, removeHeaderAds, addHeaderAds, HeaderAdsRef } =
    useAdsController();

  return (
    <div className="pb-6 mt-6">
      <div className="flex flex-col">
        <label htmlFor="HeaderAds" className="text-sm text-gray-700 mb-2">
          HeaderAds Title
        </label>
        <div className="flex flex-row">
          <input
            id="HeaderAds"
            ref={HeaderAdsRef}
            type="text"
            className="outline-none py-2 px-3 border border-gray-300 w-[400px]"
          />
          <div
            onClick={addHeaderAds}
            className="w-[100px] flex items-center justify-center uppercase cursor-pointer bg-gray-800 text-white"
          >
            Add
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-700 mb-2">
          HeaderAds ({ads.length}/12)
        </label>

        {ads.length > 0 ? (
          <div className="grid grid-cols-3 mt-3 ">
            {ads.map((headerAds, i) => (
              <HeaderAds
                headerAds={headerAds}
                removeHeaderAds={removeHeaderAds}
                key={i}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 mt-3">There is no HeaderAds</p>
        )}
      </div>
      <button
        disabled={!ads.length}
        onClick={handleUpdateAds}
        className="bg-gray-800 disabled:opacity-50 text-white w-fit py-2 px-12 mt-6 cursor-pointer"
      >
        Update Ads
      </button>
    </div>
  );
};

const HeaderAds = ({ headerAds, removeHeaderAds }) => {
  return (
    <div className="flex justify-between bg-white text-gray-800 p-3 border border-gray-300 flex-row gap-3 items-center">
      <p>{headerAds}</p>
      <div
        onClick={() => removeHeaderAds(headerAds)}
        className="ms-3 text-gray-500 cursor-pointer hover:text-gray-800 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderAdsController;
