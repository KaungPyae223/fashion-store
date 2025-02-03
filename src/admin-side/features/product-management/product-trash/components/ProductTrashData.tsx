import { restoreProduct } from "@/admin-side/services/product";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const ProductTrashData = ({ product }) => {
  const { revalidate } = useRevalidatedData();

  const handleRestoreBtn = async () => {
    if (window.confirm("Are you sure to restore")) {
      try {
        const res = await restoreProduct(product.id);
        const json = await res.json();

        if (res.ok) {
          toast.success(json.message);
          await revalidate("/product/trash");
        } else {
          toast.error(json.message);
        }
      } catch (error) {
        toast.error("An error occurred while deleting the product.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <tr className="text-gray-800 bg-white border-y-[12px] border-y-gray-100">
      <td className="p-2 border-spacing-0">
        <div className="flex flex-row gap-3 items-center">
          <Image
            alt={product.name + " image"}
            className="min-w-[70px] max-w-[70px] min-h-[70px] max-h-[70px] object-cover"
            width={70}
            height={70}
            src={product.cover_image}
          />
          <div>
            <p className="font-medium text-base text-start">{product.name}</p>

            <div className="flex mt-2 flex-wrap justify-start gap-1">
              {product.sizes.map((size) => (
                <p
                  key={size.id}
                  className="text-xs text-gray-500 bg-gray-200 px-3 py-0.5 rounded-full"
                >
                  {size.size}
                </p>
              ))}
            </div>
          </div>
        </div>
      </td>
      <td className="text-start px-2 text-gray-800">
        <p className="text-gray-600 w-fit border-gray-300 text-xs px-3 py-0.5 border rounded-full">
          {product.color}
        </p>
      </td>

      <td className="text-start px-2 text-gray-800">{product.category}</td>
      <td className="text-start px-2 text-gray-800">{product.brand}</td>
      <td className="text-start px-2 text-gray-800">{product.type}</td>
      <td className="text-center px-2 text-gray-800">{product.gender}</td>
      <td className="text-end px-2 text-gray-800">
        {product.original_price} Ks
      </td>
      <td className="text-end px-2 text-gray-800">
        {product.profit_percent} %
      </td>
      <td className="text-end px-2 text-gray-800">
        {product.discount_price} Ks
      </td>
      <td className="text-end px-2 text-gray-800">{product.sell_price} Ks</td>
      <td className="text-end px-2 text-gray-800">{product.totalQty}</td>

      <td className=" text-gray-800 px-2 text-center">
        {product.status === "public" ? (
          <div className="py-0.5 px-3 inline mx-auto text-xs rounded-full bg-green-400 text-gray-700">
            Public
          </div>
        ) : (
          <div className="py-0.5 px-3 inline mx-auto text-xs rounded-full bg-red-600 text-white">
            Private
          </div>
        )}
      </td>
      <td className="px-2">
        <div className="flex flex-row justify-center items-center gap-3">
          <Link href={"/admin/product-trash/details/" + product.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
          <svg
            onClick={handleRestoreBtn}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-4 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
};

export default ProductTrashData;
