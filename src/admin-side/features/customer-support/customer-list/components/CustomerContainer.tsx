import React from "react";
import CustomerDataTr from "./CustomerDataTr";

const CustomerContainer = () => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start ps-4 px-2">Customer</th>
            <th className="text-start px-2">Phone Number</th>
            <th className="text-start px-2">Email</th>
            <th className="text-start px-2">Address</th>
            <th className="text-end px-2">Total Orders</th>
            <th className="px-2 ps-4 w-10 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <CustomerDataTr/>
          <CustomerDataTr/>
          <CustomerDataTr/>
          <CustomerDataTr/>
          <CustomerDataTr/>
          <CustomerDataTr/>
          <CustomerDataTr/>
          <CustomerDataTr/>

        </tbody>
      </table>
    </div>
  );
};

export default CustomerContainer;
