import React from "react";
import Chart from "react-google-charts";

const ProductSaleColumnChart = ({ data }) => {

  const saleData = [
    ["Month", "Density"],
    ["January", 8.94], 
    ["February", 10.49], 
    ["March", 19.3],
    ["April", 21.45],
    ["May", 21.45], 
    ["June", 21.45], 

  ];

  

  return (
    <div className="p-5 bg-white col-span-2">
      <p className="text-xl tracking-wider font-medium">
        {data.name} Sale Graph
      </p>
      <Chart chartType="ColumnChart" width="100%" height="100%" data={saleData} />
    </div>
  );
};

export default ProductSaleColumnChart;
