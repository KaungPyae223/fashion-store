import { fetchDelivery } from "@/admin-side/services/packaging";
import React, { useEffect, useState } from "react";

const SelectDelivery = ({ setCurrentStage,select,setSelect }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const FetchDelivery = async () => {
      const Deliveries = await fetchDelivery();
      setData(Deliveries);
    };

    FetchDelivery();
  }, []);

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
            { data && data.delivery_data.map((delivery) => (
              <DeliveryTr key={delivery.id} select={select} setSelect={setSelect} delivery={delivery}  />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex mt-6 flex-row items-center justify-end gap-3">
        <button
          onClick={() => setCurrentStage(2)}
          className="px-9 py-2 disabled:opacity-50 border border-gray-800 "
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStage(4)}
          disabled={!select}
          className="px-9 py-2 disabled:opacity-50 bg-gray-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const DeliveryTr = ({ delivery, select, setSelect }) => {
  return (
    <tr
      onClick={() => setSelect(delivery.id)}
      className={`text-sm ${
        select === delivery.id ? "bg-gray-800 text-white" : ""
      } text-gray-800 border-b last:border-b-0`}
    >
      <td className="py-3 text-end pe-6">{delivery.id}</td>
      <td className="py-3 text-start px-6">{delivery.name}</td>
      <td className="py-3 text-start px-6">{delivery.phone}</td>
      <td className="py-3 text-start">{delivery.address}</td>
    </tr>
  );
};

export default SelectDelivery;
