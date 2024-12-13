"use client";
import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import React, { useState } from "react";
import ProductBlankImage from "@/assets/image.png";
import Image from "next/image";
import SingleImageUpload from "../../../components/SingleImageUpload";
import HomeHeroPreview from "./HomeHeroPreview";

const HomeHeroController = () => {
  const [image, setImage] = useState();

  return (
      <div className="my-6 border-b pb-6">
        <AdminSubTitle title="Home Hero Section Controller" />
        <div className="flex flex-col">
          <label htmlFor="HeroTitle" className="text-sm text-gray-700 mb-2">
            Hero Title
          </label>
          <input
            id="HeroTitle"
            type="text"
            className="outline-none py-2 px-3 border border-gray-300 w-[500px]"
          />
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="HeroLink" className="text-sm text-gray-700 mb-2">
            Hero Link
          </label>
          <input
            id="HeroLink"
            type="text"
            className="outline-none py-2 px-3 border border-gray-300 w-[300px]"
          />
        </div>
        <div>
          <label htmlFor="HeroLink" className="text-sm text-gray-700 mb-2">
            Hero Picture
          </label>

          {image ? (
            <img src={image.preview} className="w-[300px] object-cover" />
          ) : (
            <Image
              className="border mt-1.5 border-gray-300 cursor-pointer "
              src={ProductBlankImage}
              alt="Product Image"
              width={300}
              height={300}
            />
          )}
          <SingleImageUpload setImage={setImage} />
        </div>
      </div>
    
  );
};

export default HomeHeroController;
