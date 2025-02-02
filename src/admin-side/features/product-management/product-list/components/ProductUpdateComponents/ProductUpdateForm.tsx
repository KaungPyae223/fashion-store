import React, { useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { SiInstatus } from "react-icons/si";
import { FaDatabase, FaDollarSign } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import StageStatus from "../StageStatus";
import { AnimatePresence, motion } from "motion/react";
import ProductDataUpdateForm from "./ProductDataUpdateForm";
import ProductPropertiesUpdateForm from "./ProductPropertiesUpdateForm";
import ProductCoverImageUpdate from "./ProductCoverImageUpdate";
import ProductDetailsImagesUpdate from "./ProductDeatailsImageUpdate";
import ProductStatusUpdate from "./ProductStatusUpdate";
import ProductPriceUpdate from "./ProductPriceUpdate";

const ProductUpdateForm = () => {
  const [stage, setStage] = useState(1);

  return (
    <div className="mt-16 flex flex-row gap-12 scrollbar-hide">
      <div className=" px-10 w-[400px] border-e border-e-gray-300">
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
              icon={<FaDollarSign className="size-5" />}
              title={"Product Price"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={4}
              icon={<FaImage className="size-5" />}
              title={"Product Profile Image"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={5}
              icon={<IoMdPhotos className="size-5" />}
              title={"Product Details Images"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={6}
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
              key={"ProductDataUpdate"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductDataUpdateForm setStage={setStage} />
            </motion.div>
          ) : stage == 2 ? (
            <motion.div
              key={"ProductPropertiesUpdate"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductPropertiesUpdateForm setStage={setStage} />
            </motion.div>
          ) : stage == 3 ? (
            <motion.div
              key={"ProductProfileEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductPriceUpdate setStage={setStage} />
            </motion.div>
          ) : stage == 4 ? (
            <motion.div
              key={"ProductCoverImageUpdate"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductCoverImageUpdate setStage={setStage} />
            </motion.div>
          ) : stage == 5 ? (
            <motion.div
              key={"ProductDetailsImageUpdate"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductDetailsImagesUpdate setStage={setStage} />
            </motion.div>
          ) : (
            <motion.div
              key={"ProductDetailsImageUpdate"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <ProductStatusUpdate setStage={setStage} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductUpdateForm;
