"use client";

import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselCard from "./CarouselCard";

const HomeHero = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 6000, // Set the autoplay delay (5 seconds)
        disableOnInteraction: false,
      }}
      speed={500} // Slide transition duration (1 second)
      pagination={{
        el: ".custom-pagination", // Use custom pagination
        clickable: true,
        renderBullet: (index, className) =>
          `<div class="${className} custom-bullet relative"></div>`,
      }}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-6 relative"
    >
      <SwiperSlide>
        <CarouselCard />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselCard />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselCard />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselCard />
      </SwiperSlide>

      {/* Custom Navigation Buttons */}
      <div className="custom-navigation absolute top-1/2 px-12 left-0 right-0 flex justify-between z-50">
        <div className="custom-prev w-10 h-10 cursor-pointer text-white/80 hover:text-white hover:bg-opacity-50 duration-300 rounded-full bg-black bg-opacity-20 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="custom-next w-10 h-10 cursor-pointer text-white/80 hover:text-white hover:bg-opacity-50 duration-300 rounded-full bg-black bg-opacity-20 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      {/* Custom Pagination */}
      <div className="z-50 absolute bottom-10 w-full custom-pagination flex flex-row gap-3 items-center justify-center"></div>
    </Swiper>
  );
};

export default HomeHero;
