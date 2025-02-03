import { deleteProduct } from "@/admin-side/services/product";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const ProductListData = ({ product }) => {
  const { revalidate } = useRevalidatedData();
  const handleDeleteBtn = async () => {
    if (window.confirm("Are you sure to delete")) {
      try {
        const res = await deleteProduct(product.id);
        const json = await res.json();

        if (res.ok) {
          toast.success(json.message);
          await revalidate("/product");
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
    <tr
      className={`text-gray-800 ${
        product.totalQty === 0 ? "bg-red-200" : "bg-white"
      }  border-y-[12px] border-y-gray-100`}
    >
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
      <td className="text-end px-2 text-nowrap text-gray-800">
        {product.original_price} Ks
      </td>
      <td className="text-end px-2 text-gray-800">
        {product.profit_percent} %
      </td>
      <td className="text-end px-2 text-nowrap text-gray-800">
        {product.discount_price} Ks
      </td>
      <td className="text-end px-2 text-nowrap text-gray-800">
        {product.sell_price} Ks
      </td>
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
          <Link href={"/admin/product-list/quantity/" + product.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.1}
              stroke="currentColor"
              className="size-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
          </Link>
          <Link href={"/admin/product-list/update/" + product.id}>
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </Link>

          <Link href={"/admin/product-list/details/" + product.id}>
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
            onClick={handleDeleteBtn}
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
};

export default ProductListData;
