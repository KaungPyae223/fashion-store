import React from "react";
import { IoMdCheckmark } from "react-icons/io";


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

export default StageStatus;
