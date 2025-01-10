import { useFormatDate } from "@/hooks/useFormatDate";
import Link from "next/link";
import React from "react";

const PaymentsTr = ({ order }) => {
  const { formatDate } = useFormatDate();

  return (
    <tr className="duration-100 hover:bg-gray-800 hover:text-white text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2 py-4 w-16 pe-4  text-end">{order.id}</td>
      <td className="text-start p-2 ">{order.customer_name}</td>
      <td className="text-start p-2 ">{order.customer_email}</td>
      <td className="text-end p-2 ">{order.total_products}</td>
      <td className="text-end p-2 ">{order.total_price}</td>
      <td className="text-end p-2 ">{formatDate(order.order_at)}</td>
      <td className="text-center p-2">{order.status}</td>
      <td className="text-center p-2 ">
        <Link href={"/admin/customer-order/details/" + order.id}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-4 mx-auto cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>
      </td>
    </tr>
  );
};

export default PaymentsTr;
