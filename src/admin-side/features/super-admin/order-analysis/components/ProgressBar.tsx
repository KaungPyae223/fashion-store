import React from "react";

type ProgressItem = {
  items: number;
  totalOrders: number;
  percent: number;
};


const ProgressBar = ({ title, data }: { title: string; data: any }) => {
  
  return (
    <div className="flex flex-col">
      <p className="text-lg font-semibold my-6">{title}</p>
      <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow">
        {data?.map((item, index) => (
          <Progress key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const Progress = ({ items, totalOrders, percent }: ProgressItem) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-base font-medium text-center">{items}</span>

      <div className="flex-1 w-full max-w-[500px]">
        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
          <div
            className="h-2.5 bg-blue-600 rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="flex gap-2 items-center w-[150px] justify-end text-sm">
        <span className="font-semibold text-gray-700 whitespace-nowrap">
          {percent}%
        </span>
        <span className="text-gray-500 whitespace-nowrap">
          ({totalOrders} orders)
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
