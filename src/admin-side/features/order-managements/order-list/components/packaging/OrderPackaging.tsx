import Image from "next/image";
import React, { useState } from "react";

const OrderPackaging = ({ setCurrentStage, data }) => {
  const [checkedBoxes, setCheckedBoxes] = useState(
    Array(data.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedBoxes = [...checkedBoxes];
    updatedCheckedBoxes[index] = !updatedCheckedBoxes[index];
    setCheckedBoxes(updatedCheckedBoxes);
  };

  const allChecked = checkedBoxes.every((checked) => checked);

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
            {data.map((product, i) => (
              <OrderProductTr
                handleCheckboxChange={handleCheckboxChange}
                index={i}
                key={product.product_id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex mt-6 flex-row items-center justify-end gap-3">
        <button
          disabled={!allChecked}
          onClick={() => setCurrentStage(2)}
          className="px-9 py-2 disabled:opacity-50 bg-gray-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const OrderProductTr = ({ product, handleCheckboxChange, index }) => {
  return (
    <tr className="text-sm text-gray-800 border-b last:border-b-0">
      <td className="py-3 text-end pe-6">{product.product_id}</td>
      <td className="py-3 text-start px-6">
        {" "}
        <div className="flex items-center gap-3 font-medium">
          <Image
            src={product.product_image}
            className="w-16 h-16 object-cover object-center"
            width={100}
            height={100}
            alt=""
          />
          {product.product_name}
        </div>
      </td>
      <td className="py-3 text-center px-6">{product.product_size}</td>
      <td className="py-3 px-6 text-end">{product.product_qty}</td>
      <td className="py-3 ps-6 w-10 text-center">
        <input
          onChange={() => handleCheckboxChange(index)}
          type="checkbox"
        />
      </td>
    </tr>
  );
};

export default OrderPackaging;
