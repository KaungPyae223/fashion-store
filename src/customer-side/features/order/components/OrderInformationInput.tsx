"use client";
import React, { useState } from "react";
import ShippingInformationForm from "./ShippingInformationForm";
import CompleteShippingData from "./CompleteShippingData";
import PaymentChoose from "./PaymentChoose";

const OrderInformationInput = () => {
  const [shippingInformation, setShippingInformation] = useState({
    Address: "",
    City: "",
    Division: "",
    Email: "",
    Name: "",
    Phone: "",
    Township: "",
    Zip_Code: "",
  });

  const [completeForm, setCompleteForm] = useState({
    shipping: false,
    Payment: false,
  });

  const [PaymentID, setPaymentID] = useState<number>();

  return (
    <div className="px-10 flex flex-col gap-12">
      {completeForm.shipping ? (
        <CompleteShippingData
          shippingInformation={shippingInformation}
          setCompleteForm={setCompleteForm}
        />
      ) : (
        <ShippingInformationForm
          shippingInformation={shippingInformation}
          setCompleteForm={setCompleteForm}
          setShippingInformation={setShippingInformation}
        />
      )}
      <PaymentChoose
        setPaymentID={setPaymentID}
        setCompleteForm={setCompleteForm}
        completeForm={completeForm}
      />
      <button
        disabled={!completeForm.shipping && !completeForm.Payment}
        className="text-lg font-medium bg-black flex justify-center items-center py-4 text-white disabled:bg-gray-300 disabled:text-gray-600"
      >
        Order The Products
      </button>
    </div>
  );
};

export default OrderInformationInput;
