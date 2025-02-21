import { fetchCustomer } from "@/admin-side/services/customer";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import useSWR from "swr";

const PaymentChoose = ({ setPaymentID, setCompleteForm, completeForm }) => {
  const { isLoading, data } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/available-payments",
    fetchCustomer
  );

  const onPaymentChoose = (event) => {
    setPaymentID(event.target.value);
    setCompleteForm((prev) => ({ ...prev, payment: true }));
  };

  return (
    <div className="border border-gray-300">
      <div className="border-b border-b-gray-300 py-5 px-7 flex flex-row gap-6 items-center">
        {completeForm.payment ? (
          <div className="w-8 h-8 rounded-full bg-green-300 text-red-500 flex items-center justify-center">
            <FcCheckmark className="size-4" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            2
          </div>
        )}
        <p className="font-semibold uppercase tracking-widest">Payment</p>
      </div>
      <div className="p-7">
        {!isLoading && data.length>0 &&
          data.map((payment) => (
            <DeliveryRadio
              label={payment.name}
              id={payment.id}
              key={payment.id}
              onPaymentChoose={onPaymentChoose}
            />
          ))}
      </div>
    </div>
  );
};

const DeliveryRadio = ({ label, id, onPaymentChoose }) => {
  return (
    <div className="mb-6 last:mb-0 flex flex-row items-center gap-3">
      <input
        onChange={onPaymentChoose}
        value={id}
        type="radio"
        name="Delivery"
        id={id}
      />
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
    </div>
  );
};

export default PaymentChoose;
