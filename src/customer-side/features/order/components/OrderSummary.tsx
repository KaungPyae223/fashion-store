import React from "react";
import OrderProduct from "./OrderProduct";

const OrderSummary = ({ data, subTotal, tax, discountTotal }) => {
  return (
    <div className="px-3 xl:px-20 row-start-1 lg:col-start-2 flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center pb-6 border-b">
        <p className="text-sm uppercase font-semibold tracking-widest">
          Order Summary
        </p>
        <p className="text-sm text-gray-500">{data.length} Products</p>
      </div>
      <div>
        {data.map((item) => {
          return <OrderProduct key={item.id} data={item} />;
        })}
      </div>
      <div className="mt-9">
        <div className="flex flex-row justify-between">
          <p>Sub Total:</p>
          <p>{subTotal} Ks</p>
        </div>

        <div className="flex flex-row justify-between my-1">
          <p>Total Discount:</p>
          <p>{discountTotal} Ks</p>
        </div>
        <div className="flex flex-row justify-between my-1">
          <p>Tax:</p>
          <p>{tax} Ks</p>
        </div>
        <div className="flex mt-2 flex-row justify-between text-lg font-semibold my-1">
          <p>Total:</p>
          <p>{subTotal + tax - discountTotal} Ks</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
