import React from "react";
import DeliveryTr from "./DeliveryTr";

const DeliveryContainer = ({ deliveries }) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2 ps-4">Delivery</th>
            <th className="text-start px-2">Phone Number</th>
            <th className="text-start px-2">Email</th>
            <th className="text-start px-2">Address</th>
            <th className="text-center px-2">Status</th>
            <th className="text-end px-2">Total Delivers</th>
            <th className="px-4 w-16 ps-8 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <DeliveryTr key={delivery.id} delivery={delivery} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryContainer;
