"use client";
import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import CarouselCard from "@/customer-side/features/home/components/CarouselCard";
import React from "react";
import { useCarouselCreate } from "../hook/useCarouselCreate";

const CarouselCreateConfirmPage = () => {
  const {
    confirmText,
    setConfirmText,
    carouselCardData,
    handleCreateCarousel,
    data,
  } = useCarouselCreate();

  return (
    <div className="mt-6">
      <AdminSubTitle title="Confirm Carousel Data to Crete" />

      <InformationContent data={data.title} title="Title" />
      <InformationContent data={data.sub_title} title="Sub Title" />
      <InformationContent data={data.link} title="Link" />
      <InformationContent data={data.link_title} title="Link Title" />

      <div className="mt-6 pointer-events-none">
        <AdminSubTitle title="Preview" />

        <CarouselCard data={carouselCardData} />
      </div>
      <div className="flex flex-col my-5 mt-9">
        <label htmlFor="ConfirmTextBox" className="text-sm text-gray-700 mb-2">
          Write "<span className="font-semibold">Confirm</span>" to Create the
          Carousel
        </label>
        <div className="flex flex-row gap-3">
          <input
            id="ConfirmTextBox"
            value={confirmText}
            onChange={(event) => setConfirmText(event.target.value)}
            type="text"
            className="outline-none py-2 h-11 px-3 border border-gray-300 w-[300px]"
          />
          <button
            disabled={confirmText !== "Confirm"}
            onClick={handleCreateCarousel}
            className="px-6 bg-gray-800 text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

const InformationContent = ({
  data,
  title,
}: {
  data: string;
  title: string;
}) => {
  return (
    <div className="text-sm  mt-0.5 flex flex-row gap-1.5">
      <div className="font-medium text-gray-500">{title}:</div>{" "}
      <div>{data}</div>
    </div>
  );
};

export default CarouselCreateConfirmPage;
