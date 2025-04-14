"use client";
import React from "react";
import Chart from "react-google-charts";

const PieChart = ({ title,data }: { title: string; data:any }) => {
 

  const options = {
    pieHole: 0.3,
    is3D: false,
    legend: {
      position: "right",
      textStyle: { fontSize: 14 },
    },
    chartArea: { width: "80%", height: "80%" },
    colors: ["#2563eb", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"], // Tailwind blue shades
  };

  return (
    <div className="mt-10">
      <p className="text-lg font-semibold mb-4">{title}</p>
      <div className="w-full max-w-3xl bg-white p-4 rounded-xl shadow">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
};

export default PieChart;
