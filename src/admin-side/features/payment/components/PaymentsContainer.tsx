import React from "react";
import PaymentsTr from "./PaymentsTr";

const PaymentsContainer = () => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-end px-2">Payment ID</th>
            <th className="text-end px-2">Order ID</th>
            <th className="text-start px-2">Customer Name</th>
            <th className="text-start px-2">Email</th>
            <th className="text-end px-2">Amount</th>
            <th className="text-end px-2">Tax</th>
            <th className="text-end px-2">Total</th>

            <th className="text-end px-2">Type</th>      
            <th className="text-center px-2">Action</th>
          </tr>
        </thead>
        <tbody>
            <PaymentsTr/>
            <PaymentsTr/>
            <PaymentsTr/>
            <PaymentsTr/>

        </tbody>
      </table>
    </div>
  );
};

export default PaymentsContainer;
