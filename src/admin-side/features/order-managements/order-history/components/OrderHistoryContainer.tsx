import React from "react";
import OrderHistoryTr from "./OrderHistoryTr";

const OrderHistoryContainer = ({ data }) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-end text-nowrap px-2">Order ID</th>

            <th className="text-start px-2">Customer Name</th>
            <th className="text-start px-2">Address</th>
            <th className="text-end px-2">Total Products</th>
            <th className="text-end px-2">Total Price</th>
            <th className="text-end px-2">Order Date</th>
            <th className="text-start px-4">Packager</th>
            <th className="text-start px-2">Delivery</th>

            <th className="text-center px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <OrderHistoryTr key={order.id} order={order} />
          ))}

          
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistoryContainer;
