import Image from "next/image";
import React from "react";

const OrderProduct = ({data}) => {

  return (
    <div className="flex flex-row items-start gap-6 mb-6">
      <Image
        width={160}
        height={160}
        alt={data.name}
        className="w-[80px] h-fit object-cover object-center"
        src={
          data.image
        }
      />
      <div className="flex-1 text-sm">
        <p className="font-medium">{data.name}</p>
        <p className="text-gray-500 my-1">{data.color}</p>
        <div className="flex flex-row justify-between items-center">
            <p>{data.size} | Qty {data.qty}</p>
            <p>{data.qty * data.unit_price} Ks</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
