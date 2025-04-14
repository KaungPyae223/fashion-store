// Ensure this is a Client Component
"use client";
import DetailsPagination from "@/admin-side/components/DetailsPagination";
import { fetchPayment } from "@/admin-side/services/payment";
import React, { useState } from "react";
import useSWR from "swr";
import OrderExportButton from "./OrderExportButton";

const OrderList = ({ month }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL +
      "/order-list?month=" +
      month +
      "&page=" +
      page,
    fetchPayment
  );

  return (
    !isLoading && (
      <div className="mt-6">
        <div className="max-w-7xl mx-auto bg-white shadow rounded-xl overflow-hidden">
          <div className="border-b px-6 border-gray-200 flex flex-row justify-between items-center">
            <div className="py-6 ">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Order List
                </h2>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                A list of all orders with customer details and order statistics.
              </p>
            </div>
            <OrderExportButton month={month} />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-end">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-end">
                    Order Items
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-end">
                    Sub Total
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-end">
                    Tax
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-end">
                    Discount
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-end">
                    Profit
                  </th>
                  <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-end">
                    Total Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {data.data.length > 0 &&
                  data.data.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">
                        {order.customer_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">
                        {order.payment}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-end">
                        {order.total_qty}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-end">
                        {order.total_products}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-end">
                        {order.sub_total}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-end">
                        {order.tax}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-end">
                        {order.discount_amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-end">
                        {order.profit}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-semibold text-end">
                        {order.total_amount}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <DetailsPagination meta={data.meta} setPage={setPage} />
        </div>
      </div>
    )
  );
};

export default OrderList;
