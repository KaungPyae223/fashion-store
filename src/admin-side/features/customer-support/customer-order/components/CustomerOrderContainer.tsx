import React from "react";
import OrderTr from "./OrderTr";

const PaymentsContainer = ({ orders }) => {

  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-end px-2 pe-4 w-20 text-nowrap">Order ID</th>
            <th className="text-start px-2">Customer Name</th>
            <th className="text-start px-2">Email</th>
            <th className="text-end px-2">Order Products</th>
            <th className="text-end px-2">Total Amount</th>
            <th className="text-end px-2">Order Date</th>
            <th className="px-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderTr key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsContainer;
