"use client";
import React, { useState } from "react";
import OrderAnalysisHeader from "../components/OrderAnalysisHeader";
import OrderKPI from "../components/OrderKPI";
import OrderBarGraph from "../components/OrderBarGraph";
import PieChart from "../components/PieChart";
import ProgressBar from "../components/ProgressBar";
import MostOrderProducts from "../components/MostOrderProducts";
import OrderList from "../components/OrderList";
import useSWR from "swr";
import { fetchPayment } from "@/admin-side/services/payment";

const OrderAnalysisPage = () => {
  const getCurrentMonth = () => {
    const today = new Date();
    return today.toISOString().slice(0, 7); // e.g., "2025-04"
  };

  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());

  const { data, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/order-analysis?month=" + selectedMonth,
    fetchPayment
  );

  return (
    !isLoading && (
      <div>
        <OrderAnalysisHeader
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <OrderKPI
          tax={data.tax}
          discount={data.discount}
          profit={data.profit}
          totalAmount={data.total_amount}
          AverageOrder={data.average_order_value}
          Fulfillment={data.fulfillmentRate}
          TotalItemsSold={data.total_items_sold}
          TotalOrders={data.totalOrders}
        />
        <OrderBarGraph data={data.order_bar_graph} />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <PieChart title={"Order By Category"} data={data.categoryChartData} />
          <PieChart
            title={"Order By Price Range"}
            data={data.priceRangeChartData}
          />
          <ProgressBar
            title={"Most Order Product Type"}
            data={data.productTypeBreakdown}
          />
          <ProgressBar title={"Most Order Brands"} data={data.brandBreakdown} />
          <PieChart title={"Order By Gender"} data={data.gender_pie_chart} />
          <PieChart title={"Order By Payment"} data={data.payment_pie_chart} />
          
          
        </div>
        <MostOrderProducts data={data.top10products} />
        <OrderList month={selectedMonth} />
      </div>
    )
  );
};

export default OrderAnalysisPage;
