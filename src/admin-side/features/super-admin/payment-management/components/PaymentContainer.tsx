import React from "react";
import PaymentTr from "./PaymentTr";

const PaymentContainer = ({payments}) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2 ps-4">Payment</th>
            <th className="text-center px-2">Status</th>
            <th className="text-end px-2">Total Payments</th>
            <th className="text-end px-2">Total Amounts</th>
            <th className="px-4 w-16 ps-8 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <PaymentTr payment={payment}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentContainer;
