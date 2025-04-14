"use client";
import React from "react";
import Chart from "react-google-charts";

const OrderBarGraph = ({data}) => {
 
  

  const options = {
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
      title: "Date",
      textPosition: 'none',
      titleTextStyle: { fontSize: 14 },
    },
    vAxis: {
      title: "Orders",
      minValue: 0,
      textStyle: { fontSize: 12 },
      titleTextStyle: { fontSize: 14 },
    },
    colors: ["#2563eb"], // Tailwind's blue-600
    chartArea: { width: "85%", height: "70%" },
  };

  return (
    <div className="mt-10">
      <p className="text-lg font-semibold mb-4">Orders Over Time</p>
      <div className="w-full h-[400px] bg-white p-4 rounded-xl shadow">
        <Chart
          chartType="LineChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default OrderBarGraph;
