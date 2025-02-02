"use client";
import React from "react";
import SizeQuantityControl from "./SizeQuantityControl";
import { fetchQuantity } from "@/admin-side/services/quantity";
import useSWR from "swr";
import Image from "next/image";

const ProductQuantityControl = ({ id }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const url = `${baseUrl}/product/get-quantity/${id}`;

  const { data, isLoading, error } = useSWR(url, fetchQuantity);

  return (
    !isLoading && (
      <div className="mt-6">
        <div className="bg-white p-6 mx-auto w-[800px]">
          <div className="flex flex-row items-center justify-center gap-6 pb-5 border-b">
            <Image
              width={120}
              height={120}
              src={data?.product_data.cover_image}
              alt=""
              className="w-[60px] h-[60px] object-cover object-center"
            />
            <p className="text-lg font-medium">{data?.product_data.name}</p>
          </div>
          <div className="mt-6">
            <table className="w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
              <thead>
                <tr className="border-b text-gray-500 text-sm">
                  <th className="py-3">Size</th>
                  <th className={"text-end"}>Current Qty</th>
                  <th className={"text-end"}>Add Qty</th>
                  <th className={"text-end"}>Remove Qty</th>
                  <th className={"text-end pe-3"}>New Qty</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.quantity.map((size) => (
                  <SizeQuantityControl
                    key={size.size_id}
                    id={size.size_id}
                    size={size.size}
                    qty={size.quantity}
                    product_id={id}
                  />
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex items-center  justify-end">
              Total Qty: <span className="ps-2 text-lg font-medium">{data?.total_quantity}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductQuantityControl;
