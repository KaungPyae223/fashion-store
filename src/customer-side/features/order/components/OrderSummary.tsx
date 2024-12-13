import React from "react";
import OrderProduct from "./OrderProduct";

const OrderSummary = () => {
  return <div className="px-20 flex flex-col gap-6">
    <div className="flex flex-row justify-between items-center pb-6 border-b">
      <p className="text-sm uppercase font-semibold tracking-widest">Order Summary</p>
      <p className="text-sm text-gray-500">2 Products</p>
    </div>
    <div>
      <OrderProduct/>
      <OrderProduct/>
      <OrderProduct/>

    </div>
    <div className="mt-9">
      <div className="flex flex-row justify-between">
        <p>Subtotal:</p>
        <p>14500000 Ks</p>
      </div>
      <div className="flex flex-row justify-between my-1">
        <p>Tax:</p>
        <p>14500 Ks</p>
      </div>
      <div className="flex mt-2 flex-row justify-between text-lg font-semibold my-1">
        <p>Total:</p>
        <p>1414500 Ks</p>
      </div>
    </div>
  </div>;
};

export default OrderSummary;
