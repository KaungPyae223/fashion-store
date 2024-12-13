import React from "react";
import { FcCheckmark } from "react-icons/fc";

const PaymentChoose = ({ setPaymentID, setCompleteForm, completeForm }) => {
  const Deliveries: { name: string; id: number }[] = [
    { name: "KBZ Pay", id: 1 },
    { name: "Aya Pay", id: 2 },
    { name: "Citizen Pay", id: 3 },
    { name: "UAB Pay", id: 4 },
    { name: "Pay On Arrive", id: 5 },
  ];

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
        {Deliveries.map((delivery) => (
          <DeliveryRadio
            label={delivery.name}
            id={delivery.id}
            key={delivery.id}
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
