'use client'
import Lottie from "lottie-react";
import React from "react";


const PageTitle = ({title,subTitle,animate}:{title:string,subTitle:string,animate:File}) => {
  return (
    <div className="border-b flex flex-row justify-between items-center mb-6 pb-6">
      <div>
        <p className="text-xl font-medium uppercase tracking-widest">
          {title}
        </p>
        <p className="text-sm tracking-wide text-gray-500 mt-1.5">{subTitle}</p>
      </div>
      
      <Lottie animationData={animate} className="h-16"/>
    </div>
  );
};

export default PageTitle;
