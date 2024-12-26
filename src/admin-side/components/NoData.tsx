import React from 'react'
import Lottie from "lottie-react";
import NoDataAnimation from "@/assets/NoDataAnimation.json";

const NoData = () => {
  return (
    <div className ="flex flex-col justify-center items-center py-12">
        <Lottie animationData={NoDataAnimation} className="h-80"/>
        <p className="text-2xl font-medium text-gray-600">There is no Data</p>
    </div>
  )
}

export default NoData