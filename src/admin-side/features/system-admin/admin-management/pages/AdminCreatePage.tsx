"use client";
import StageStatus from "@/admin-side/features/product-management/product-list/components/StageStatus";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { CiAt } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoCameraSharp } from "react-icons/io5";
import { BsPersonFillCheck } from "react-icons/bs";
import AdminDataEntry from "../components/adminCreate/AdminDataEntry";
import AdminPhotoEntry from "../components/adminCreate/AdminPhotoEntry";
import AdminRole from "../components/adminCreate/AdminRole";
import AdminConfirm from "../components/adminCreate/AdminConfirm";

const AdminCreatePage = () => {
  const [stage, setStage] = useState(1);

  return (
    <div className="mt-16 flex flex-row gap-12 scrollbar-hide">
      <div className=" px-10 w-[400px] border-e border-e-gray-300">
        <div className="relative border-l-2 border-gray-300">
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={1}
              icon={<FaUser className="size-5" />}
              title={"Admin Data"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={2}
              icon={<IoCameraSharp className="size-5" />}
              title={"Admin Image"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={3}
              icon={<CiAt className="size-5" />}
              title={"Admin Role"}
            />
          </div>
          <div className="mb-14 ml-6 flex items-center">
            <StageStatus
              currentStage={stage}
              stage={4}
              icon={<BsPersonFillCheck className="size-5" />}
              title={"Admin Confirm"}
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
              <AdminDataEntry setStage={setStage} />
            </motion.div>
          ) : stage == 2 ? (
            <motion.div
              key={"ProductPropertiesEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <AdminPhotoEntry setStage={setStage} />
            </motion.div>
          ) : stage == 3 ? (
            <motion.div
              key={"ProductProfileEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <AdminRole setStage={setStage} />
            </motion.div>
          ) : (
            <motion.div
              key={"ProductDetailsEntry"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <AdminConfirm setStage={setStage} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminCreatePage;
