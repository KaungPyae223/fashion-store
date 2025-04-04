"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CarouselCard = ({ data }) => {
  const carouselRef = useRef();

  const Navigation = document.querySelector(".Navigation");

  useEffect(() => {
    if (Navigation) {
      const windowHeight = window.innerHeight;
      const carouselHeight = windowHeight - Navigation.clientHeight;

      carouselRef.current.style.height = `${carouselHeight + 20}px`;
    } else {
      carouselRef.current.style.height = `80vh`;
    }
  }, []);

  return (
    <div
      ref={carouselRef}
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-white text-4xl font-bold text-center mx-3">{data.title}</h1>
          <p className="text-white text-lg text-center mx-3">{data.sub_title}</p>
          <Link href={data.link} className="bg-white text-black px-8 py-2 mt-4">
            {data.link_title}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselCard;
