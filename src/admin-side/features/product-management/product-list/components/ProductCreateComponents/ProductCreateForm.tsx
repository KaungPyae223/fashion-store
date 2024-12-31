"use client";
import React, { useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { SiInstatus } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";

import { IoMdCheckmark } from "react-icons/io";
import ProductDataEntryForm from "./ProductDataEntryForm";
import { AnimatePresence, motion } from "motion/react";
import ProductPropertiesEntry from "./ProductPropertiesEntry";
import ProductProfileImageEntry from "./ProductCoverImageEntry";
import ProductDetailsImagesEntry from "./ProductDetailsImagesEntry";
import ProductStatusEntry from "./ProductStatusEntry";

const ProductCreateForm = () => {
  const [stage, setStage] = useState(1);

  return (
    <div className="mt-16 flex flex-row gap-12 scrollbar-hide">
      <div className=" px-10 w-1/3 border-e border-e-gray-300">
        <div className="relative border-l-2 border-gray-300">
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={1}
              icon={<FaDatabase className="size-5" />}
              title={"Product Data"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={2}
              icon={<AiFillProduct className="size-5" />}
              title={"Product Properties"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={3}
              icon={<FaImage className="size-5" />}
              title={"Product Profile Image"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={4}
              icon={<IoMdPhotos className="size-5" />}
              title={"Product Details Images"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={5}
              icon={<SiInstatus className="size-5" />}
              title={"Product Status"}
            />
          </div>
        </div>
      </div>

      <div>
        <AnimatePresence mode="wait">
          {stage == 1 ? (
            <motion.div
              key={"ProductDataEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductDataEntryForm setStage={setStage} />
            </motion.div>
          ) : stage == 2 ? (
            <motion.div
              key={"ProductPropertiesEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductPropertiesEntry setStage={setStage} />
            </motion.div>
          ) : stage == 3 ? (
            <motion.div
              key={"ProductProfileEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductProfileImageEntry setStage={setStage} />
            </motion.div>
          ) : stage == 4 ? (
            <motion.div
              key={"ProductDetailsEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductDetailsImagesEntry setStage={setStage} />
            </motion.div>
          ):(
            <motion.div
              key={"ProductStatusEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductStatusEntry setStage={setStage} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const StageStatus = ({ currentStage, stage, icon, title }) => {
  if (currentStage > stage) {
    return (
      <>
        <div className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-slate-400 text-white rounded-full duration-300">
          <IoMdCheckmark className="size-5" />
        </div>
        <h3 className="ms-6 duration-300 font-medium text-slate-500">
          Product Data
        </h3>
      </>
    );
  }

  return (
    <>
      <div
        className={`absolute flex items-center justify-center ${
          currentStage == stage
            ? "bg-gray-800 text-white w-14 h-14 -left-7 "
            : "bg-gray-300 text-gray-400 w-12 h-12 -left-6"
        }  rounded-full duration-300`}
      >
        {icon}
      </div>
      <h3
        className={`  duration-300 ${
          currentStage == stage
            ? "text-gray-800 font-semibold text-xl ms-7"
            : "text-gray-400 ms-6"
        }`}
      >
        {title}
      </h3>
    </>
  );
};

export default ProductCreateForm;
