"use client";
import React, { useState } from "react";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaPeopleCarrySolid } from "react-icons/lia";

import { PiPackage } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import OrderPackaging from "../components/packaging/OrderPackaging";
import { AnimatePresence, motion } from "motion/react";
import GenerateInvoice from "../components/packaging/GenerateInvoice";
import SelectDelivery from "../components/packaging/SelectDelivery";
import ReceiverInformation from "../components/packaging/ReceiverInformation";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import { usePackagingData } from "../hooks/usePackagingData";

const PackagingPage = ({ id }) => {
  const [currentStage, setCurrentStage] = useState(1);

  const { data, error, isLoading } = usePackagingData();

  const [select, setSelect] = useState<number | null>(null);



  return (
    <div className="mt-6">
      <div className="flex items-center justify-center py-6 border-b">
        <Stage
          icon={<PiPackage className="size-5" />}
          stageName={"Packaging Products"}
          currentStage={currentStage}
          stage={1}
        />
        <Stage
          icon={<LiaFileInvoiceDollarSolid className="size-5" />}
          stageName={"Adding Invoice"}
          currentStage={currentStage}
          stage={2}
        />
        <Stage
          icon={<CiDeliveryTruck className="size-5" />}
          stageName={"Select Delivery"}
          currentStage={currentStage}
          stage={3}
        />
        <Stage
          icon={<LiaPeopleCarrySolid className="size-5" />}
          stageName={"Receiver Information"}
          currentStage={currentStage}
          stage={4}
        />
      </div>

      {isLoading ? (
        <Loading />
      ) : data?.order_data ? (
        <div className="w-[800px] mx-auto">
          <AnimatePresence mode="wait">
            {currentStage == 1 ? (
              <motion.div
                key={"OrderPackaging"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <OrderPackaging
                  data={data.order_products}
                  setCurrentStage={setCurrentStage}
                />
              </motion.div>
            ) : currentStage == 2 ? (
              <motion.div
                key={"GenerateInvoice"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <GenerateInvoice
                  id={id}
                  data={data}
                  setCurrentStage={setCurrentStage}
                />
              </motion.div>
            ) : currentStage == 3 ? (
              <motion.div
                key={"SelectDelivery"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <SelectDelivery
                  select={select}
                  setSelect={setSelect}
                  setCurrentStage={setCurrentStage}
                />
              </motion.div>
            ) : (
              <motion.div
                key={"ReceiverInformation"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <ReceiverInformation
                  select={select}
                  receiverInfo={data.order_data}
                  setCurrentStage={setCurrentStage}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

const Stage = ({ stageName, icon, currentStage, stage }: any) => {
  if (stage < currentStage) {
    return (
      <div className="flex items-center mr-20">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full border bg-gray-300 stroke-slate-400 text-gray-400`}
        >
          <IoMdCheckmark className="size-5" />
        </div>
        <div
          className={`text-gray-60 text-slate-600 text-sm duration-300 ml-2`}
        >
          {stageName}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center mr-20">
      <div
        className={`w-10 stroke-slate-500 h-10 duration-300 ${
          currentStage == stage
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-400"
        } flex items-center justify-center rounded-full border border-gray-300 text-sm`}
      >
        {icon}
      </div>
      <div
        className={`text-gray-60 ${
          currentStage == stage ? "text-gray-800 " : "text-gray-400 text-sm"
        } duration-300 ml-2`}
      >
        {stageName}
      </div>
    </div>
  );
};

export default PackagingPage;
