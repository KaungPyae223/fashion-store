import AdminPagination from "@/admin-side/components/AdminPagimation";
import React from "react";
import OrderHistoryTr from "./OrderHistoryTr";

const OrderHistoryContainer = () => {
  return (
    <div>
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-end px-2">Order ID</th>

            <th className="text-start px-2">Customer Name</th>
            <th className="text-start px-2">Address</th>
            <th className="text-end px-2">Total Order</th>
            <th className="text-end px-2">Total Price</th>
            <th className="text-end px-2">Order Date</th>
            <th className="text-start px-2">Packager</th>
            <th className="text-start px-2">Delivery</th>
            
            <th className="text-center px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
          <OrderHistoryTr />
        </tbody>
      </table>
      <AdminPagination />
    </div>
  );
};

export default OrderHistoryContainer;
