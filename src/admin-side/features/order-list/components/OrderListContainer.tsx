import React from "react";
import OrderListTr from "./OrderListTr";
import AdminPagination from "@/admin-side/components/AdminPagimation";

const OrderListContainer = () => {
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
            <th className="text-end px-2">Order Duration</th>
            <th className="text-center px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <OrderListTr />
          <OrderListTr />
          <OrderListTr />
          <OrderListTr />
          <OrderListTr />
          <OrderListTr />
          <OrderListTr />
          <OrderListTr />
          <OrderListTr />
          <OrderListTr />

        </tbody>
      </table>
      <AdminPagination />
    </div>
  );
};

export default OrderListContainer;
