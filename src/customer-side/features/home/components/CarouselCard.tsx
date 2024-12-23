'use client'
import React from "react";
import { motion } from "framer-motion";

const CarouselCard = () => {
  return (
    <div
      className="h-[80vh]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1478118330274-ff72cf1161a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
          <h1 className="text-white text-4xl font-bold">New Collection</h1>
          <p className="text-white text-lg">
            Get your hands on the latest collection
          </p>
          <button className="bg-white text-black px-8 py-2 mt-4">
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselCard;
