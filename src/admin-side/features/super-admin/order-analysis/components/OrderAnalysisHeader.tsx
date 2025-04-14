"use client";
import React, { SetStateAction } from "react";

const OrderAnalysisHeader = ({selectedMonth,setSelectedMonth}:{selectedMonth:string;setSelectedMonth:React.Dispatch<SetStateAction<string>>}) => {
  
  const formatHeaderDate = (dateStr: string) => {
    const date = new Date(dateStr + "-01"); // Add day to form valid date
    return date.toLocaleString("default", { month: "long", year: "numeric" }); // e.g., "April 2025"
  };

  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
      <p className="text-2xl font-semibold text-gray-800">
        {formatHeaderDate(selectedMonth)}
      </p>

      <div className="flex items-center gap-2">
       

        <div className="flex flex-col">
          <label htmlFor="month" className="text-sm text-gray-600 mb-0.5">
            Filter Month
          </label>
          <input
            id="month"
            type="month"
            className="outline-none px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-gray-700"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderAnalysisHeader;
