import React from "react";

interface HomeTitleInterface {
    title:string
}

export const HomeTitle = ({title}:HomeTitleInterface) => {
  return (
    <div className="col-span-12 mb-3 flex items-center justify-between">
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-sm underline text-gray-500 cursor-pointer hover:text-gray-800">
        View All
      </p>
    </div>
  );
};
