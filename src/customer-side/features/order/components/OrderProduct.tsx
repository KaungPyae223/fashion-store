import React from "react";

const OrderProduct = () => {
  return (
    <div className="flex flex-row items-start gap-6 mb-6">
      <img
        alt={"Hello World"}
        className="w-[80px] h-fit object-cover object-center"
        src={
          "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/0/8/08-11-24-ns_b24469-khk_m1.jpg"
        }
      />
      <div className="flex-1 text-sm">
        <p className="font-medium">Billionaire Boys Club Duck Varsity Trucker Cap</p>
        <p className="text-gray-500 my-1">White</p>
        <div className="flex flex-row justify-between items-center">
            <p>One Size | Qty 1</p>
            <p>350000 Ks</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
