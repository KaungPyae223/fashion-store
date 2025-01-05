import React from "react";

const OrderProductTable = () => {
  return (
    <div className="bg-white p-6">
      <table className="table-auto w-full text-left border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="border-b text-gray-500 text-sm">
            <th className="text-end pe-6 py-3 w-12 text-nowrap">ID</th>
            <th className="text-start px-2 py-3">Product</th>
            <th className="text-center py-3 px-2">Size</th>
            <th className="text-center py-3 px-2">Color</th>
            <th className="text-end py-3 px-2">Quantity</th>
            <th className="text-end py-3 px-2">Unit Price</th>
            <th className="text-end py-3 px-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <OrderProductTr />
          <OrderProductTr />
          <OrderProductTr />
          <OrderProductTr />
          <OrderProductTr />
          <OrderProductTr />
        </tbody>
      </table>
    </div>
  );
};

const OrderProductTr = () => {
  return (
    <tr className="border-b last:border-b-0 text-sm">
      <td className="text-end pe-6 py-3 w-12 text-nowrap">1</td>
      <td className="text-start px-2 py-3 ">
        <div className="flex items-center gap-4 font-medium text-base">
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png"
            className="w-16 h-16 object-cover object-center"
            alt=""
          />
          Nike AirForce 1
        </div>
      </td>
      <td className="text-center py-3 px-2">US 10</td>
      <td className="text-center py-3 px-2">Black</td>
      <td className="text-end py-3 px-2">1</td>
      <td className="text-end py-3 px-2">5000 Ks</td>
      <td className="text-end py-3 px-2">5000 Ks</td>
    </tr>
  );
};

export default OrderProductTable;
