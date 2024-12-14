import AdminPagination from "@/admin-side/components/AdminPagimation";
import React from "react";
import DeliveryTr from "./DeliveryTr";

const DeliveryContainer = () => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2">Delivery</th>
            <th className="text-start px-2">Phone Number</th>
            <th className="text-start px-2">Email</th>
            <th className="text-start px-2">Address</th>
            <th className="text-center px-2">Status</th>
            <th className="text-end px-2">Total Delivers</th>
            <th className="px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <DeliveryTr />
          <DeliveryTr />
          <DeliveryTr />
          <DeliveryTr />
          <DeliveryTr />
          <DeliveryTr />
          <DeliveryTr />
          <DeliveryTr />

        </tbody>
      </table>
      <AdminPagination />
    </div>
  );
};

export default DeliveryContainer;
