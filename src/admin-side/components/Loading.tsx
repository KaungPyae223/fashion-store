import React from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from "@/assets/Loading.json";

const Loading = () => {
  return (
    <div className ="flex flex-col justify-center items-center gap-12 py-12">
        <Lottie animationData={LoadingAnimation} className="h-64"/>
        <p className="text-2xl tracking-wider font-medium text-gray-600">Loading...</p>
    </div>
  )
}

export default Loading