import React from "react";

const OrderPackaging = ({ setCurrentStage }) => {
  return (
    <div className="py-9">
      <p className="text-xl text-center font-medium tracking-wide mb-3">
        Packaging Order Products
      </p>
      <div className="mt-6 bg-white py-3 px-6">
        <table className="table-auto  w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
          <thead>
            <tr className="text-sm text-gray-600">
              <th className="py-3 text-end pe-6">ID</th>
              <th className="py-3 text-start px-6">Product</th>
              <th className="py-3 text-center px-6">Size</th>
              <th className="py-3 px-6 text-end">Quantity</th>
              <th className="py-3 ps-6 w-10 text-center">Package</th>
            </tr>
          </thead>
          <tbody>
            <OrderProductTr />
            <OrderProductTr />
            <OrderProductTr />
            <OrderProductTr />
            <OrderProductTr />
            <OrderProductTr />
            <OrderProductTr />
            <OrderProductTr />
          </tbody>
        </table>
      </div>
      <div className="flex mt-6 flex-row items-center justify-end gap-3">
        <button
          onClick={() => setCurrentStage(2)}
          className="px-9 py-2 disabled:opacity-50 bg-gray-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const OrderProductTr = () => {
  return (
    <tr className="text-sm text-gray-800 border-b last:border-b-0">
      <td className="py-3 text-end pe-6">1</td>
      <td className="py-3 text-start px-6">
        {" "}
        <div className="flex items-center gap-3 font-medium">
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png"
            className="w-16 h-16 object-cover object-center"
            alt=""
          />
          Nike AirForce 1
        </div>
      </td>
      <td className="py-3 text-center px-6">XL</td>
      <td className="py-3 px-6 text-end">1</td>
      <td className="py-3 ps-6 w-10 text-center">
        <input type="checkbox" />
      </td>
    </tr>
  );
};

export default OrderPackaging;
