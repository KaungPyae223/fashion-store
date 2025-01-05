import React from "react";
import OrderListTr from "./OrderListTr";

const OrderListContainer = ({orders}) => {

  return (
    <div>
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-end px-4 w-24">Order ID</th>

            <th className="text-start px-4 w-16">Customer Name</th>
            <th className="text-start px-2">Address</th>
            <th className="text-end px-2">Total Order</th>
            <th className="text-end px-2">Total Price</th>
            <th className="text-end px-2">Order Duration</th>
            <th className="text-center px-4 ps-6 w-16">Action</th>
          </tr>
        </thead>
        <tbody>
         {
          orders.map((order) => (
            <OrderListTr key={order.id} order={order} />
          ))
         }

        </tbody>
      </table>
      
    </div>
  );
};

export default OrderListContainer;
