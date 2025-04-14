"use client";

import React from "react";


const DeliveryDataTr = ({ delivery }) => {
  

  return (
      <tr className=" text-gray-800 bg-white border-y-[12px] border-y-gray-100">
        <td className="text-start p-2 ps-4 py-4 ">{delivery.name}</td>
        <td className="text-start p-2 ">{delivery.phone}</td>
        <td className="text-start p-2 ">{delivery.email}</td>
        <td className="text-start p-2 ">{delivery.address}</td>
        <td className="  p-2 text-center">
          {delivery.status === "available" ? (
            <div className="py-0.5 px-3 inline mx-auto text-xs rounded-full bg-green-400 text-gray-600">
              {delivery.status}
            </div>
          ) : (
            <div className="py-0.5 px-3 inline mx-auto text-xs rounded-full bg-red-400 text-white">
              {delivery.status}
            </div>
          )}
        </td>
        
      </tr>
    
  );
};

export default DeliveryDataTr;
