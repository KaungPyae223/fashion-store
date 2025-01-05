import React, { useState } from "react";

const SelectDelivery = ({setCurrentStage}) => {
  const [select, setSelect] = useState<number | null>(null);

  console.log(select);

  return (
    <div className="py-9">
      <p className="text-xl text-center font-medium tracking-wide mb-3">
        Select Delivery
      </p>
      <div className="mt-6 bg-white py-3 px-6">
        <table className="table-auto  w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
          <thead>
            <tr className="text-sm text-gray-600">
              <th className="py-3 text-end pe-6">ID</th>
              <th className="py-3 text-start px-6">Delivery</th>
              <th className="py-3 text-start px-6">Phone</th>
              <th className="py-3 text-start">Address</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <DeliveryTr
                key={index}
                id={index}
                select={select}
                setSelect={setSelect}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex mt-6 flex-row items-center justify-end gap-3">
        <button onClick={() => setCurrentStage(2)} className="px-9 py-2 disabled:opacity-50 border border-gray-800 ">
          Back
        </button>
        <button onClick={() => setCurrentStage(4)} disabled={!select} className="px-9 py-2 disabled:opacity-50 bg-gray-800 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

const DeliveryTr = ({ id, select, setSelect }) => {
  return (
    <tr
      onClick={() => setSelect(id)}
      className={`text-sm ${
        select === id ? "bg-gray-800 text-white" : ""
      } text-gray-800 border-b last:border-b-0`}
    >
      <td className="py-3 text-end pe-6">{id}</td>
      <td className="py-3 text-start px-6">Royal Express</td>
      <td className="py-3 text-start px-6">0123456789</td>
      <td className="py-3 text-start">No. 1, Street, City</td>
    </tr>
  );
};

export default SelectDelivery;
