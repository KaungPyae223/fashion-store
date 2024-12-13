import React from "react";

const OrderListTr = () => {
  return (
    <tr className="text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2 text-gray-800 text-end">1</td>
      <td className="text-start p-2 text-gray-800">Min Khant Naing</td>
      <td className="text-start p-2 text-gray-800">No. 28 Aye Road, Yangon</td>
      <td className="text-end p-2 text-gray-800">3</td>
      <td className="text-end p-2 text-gray-800">250000 Ks</td>
      <td className="text-end p-2 text-gray-800">3 days</td>
      <td className="text-center p-2 text-gray-800">
        <div className="px-4 py-1 border border-gray-300 inline-block cursor-pointer duration-300 hover:border-gray-800">Packaging</div>
      </td>

    </tr>
  );
};

export default OrderListTr;
