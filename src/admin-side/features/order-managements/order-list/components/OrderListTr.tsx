import Link from "next/link";
import React from "react";

const OrderListTr = ({ order }) => {
  return (
    <tr className="duration-100 hover:bg-gray-800 hover:text-white text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2  text-end px-4 w-24">{order.id}</td>
      <td className="text-start p-2 ">{order.customer_name}</td>
      <td className="text-start p-2 ">{order.address}</td>
      <td className="text-end p-2 ">{order.totalOrders}</td>
      <td className="text-end p-2 ">{order.totalPrice} Ks</td>
      <td className="text-end p-2 ">{order.question_at}</td>
      <td className="text-center p-2 ps-6 ">
        <Link href={"http://localhost:3000/admin/order-list/packaging/"+order.id} className="px-4 py-1 border border-gray-300 inline-block cursor-pointer">
          Package
        </Link>
      </td>
    </tr>
  );
};

export default OrderListTr;
