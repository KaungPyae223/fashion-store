import InformationContent from "@/admin-side/components/InformationContent";
import CarouselCard from "@/customer-side/features/home/components/CarouselCard";
import React from "react";

const HomeCarouselPreview = ({data,index}) => {
  return (
    <div className="bg-white p-6">
      <div className="flex flex-row justify-start items-center gap-5">
        <p className="font-medium text-2xl">Carousel {index+1}</p>
      </div>
      <div className="pointer-events-none mt-6">
        <InformationContent data={data.link} title="Link" />
        <InformationContent data={data.title} title="Title" />
        <InformationContent data={data.sub_title} title="SubTitle" />
        <InformationContent data={data.link_title} title="Link Title" />
      </div>
      <div className="pointer-events-none mt-6">
        <CarouselCard data={data} />
      </div>
      <button className="border duration-300 hover:bg-gray-800 hover:text-white border-gray-400 mt-6 ms-auto block disabled:opacity-50  w-fit py-2 px-6 cursor-pointer">
        Delete Carousel {index+1}
      </button>
    </div>
  );
};



export default HomeCarouselPreview;
