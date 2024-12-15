import React from "react";

const OrderListTr = () => {
  return (
    <tr className="duration-100 hover:bg-gray-800 hover:text-white text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2  text-end">1</td>
      <td className="text-start p-2 ">Min Khant Naing</td>
      <td className="text-start p-2 ">No. 28 Aye Road, Yangon</td>
      <td className="text-end p-2 ">3</td>
      <td className="text-end p-2 ">250000 Ks</td>
      <td className="text-end p-2 ">3 days</td>
      <td className="text-center p-2 ">
        <div className="px-4 py-1 border border-gray-300 inline-block cursor-pointer">Package</div>
      </td>

    </tr>
  );
};

export default OrderListTr;
