import React from "react";
import { FcCheckmark } from "react-icons/fc";

const CompleteShippingData = ({ shippingInformation, setCompleteForm }) => {
  const changeShippingData = () => {
    setCompleteForm((prev) => ({ ...prev, shipping: false }));
  };

  return (
    <div className="border border-gray-300">
      <div className="border-b border-b-gray-300 py-5 px-7 flex flex-row gap-6 items-center">
        <div className="w-8 h-8 rounded-full bg-green-300 text-red-500 flex items-center justify-center">
          <FcCheckmark className="size-4" />
        </div>
        <p className="font-semibold uppercase tracking-widest">
          Shipping Address
        </p>
      </div>
      <div className="p-7 flex flex-row justify-between text-sm">
        <div>
          <p className="mb-1">{shippingInformation.Name}</p>
          <p className="mb-1">{shippingInformation.Phone}</p>
          <p className="mb-1">{shippingInformation.Email}</p>
          <p className="mb-1">{shippingInformation.Division}</p>
          <p className="mb-1">{shippingInformation.City}</p>
          <p className="mb-1">{shippingInformation.Township}</p>
          <p className="mb-1">{shippingInformation.Address}</p>
          <p className="mb-1">{shippingInformation.Zip_Code}</p>
        </div>
        <div>
          <p
            onClick={changeShippingData}
            className="text-gray-500 cursor-pointer font-medium tracking-wide"
          >
            Change
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompleteShippingData;
