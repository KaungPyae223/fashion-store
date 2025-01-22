"use client";
import { deleteReview } from "@/admin-side/services/product";
import { useFormatDate } from "@/hooks/useFormatDate";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import React from "react";

const ProductReviewTable = ({ data, url }) => {

  
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-gray-800 border-y">
            <th className="text-start px-3 py-3 border-x">Customer</th>
            <th className="text-start px-3 border-e py-3">Review</th>
            <th className="text-start px-3 border-e py-3">Rating</th>
            <th className="text-start px-3 border-e py-3">Date</th>
            <th className="text-center px-3 border-e py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <ReviewTr key={el.id} url={url} data={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ReviewTr = ({ data, url }) => {
  const { formatDate } = useFormatDate();
  const { revalidate } = useRevalidatedData();

  const deleteRating = async () => {
    if (window.confirm("Sure to delete?")) {
      const res = await deleteReview(data.id);

      if (!res.ok) {
        console.error(`Failed to delete review. Status: ${res.status}`);
        alert("Failed to delete the review. Please try again.");
        return;
      }

      await revalidate(url);
    }
  };

  return (
    <tr className="border-b hover:bg-gray-800 duration-300 hover:text-white">
      <td className="py-3 px-3 border-x">
        <div>
          <p className="font-medium text-lg text-nowrap">{data.name}</p>
          <p className="text-xs">{data.email}</p>
        </div>
      </td>
      <td className="py-3 px-3 text-justify b border-e">{data.review}</td>
      <td className="px-3 py-3 border-e">
        <div className="flex flex-row items-center justify-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          {data.rating}
        </div>
      </td>
      <td className="px-3 py-3 text-sm text-nowrap border-e">
        {formatDate(data.date)}
      </td>
      <td className="px-3 py-3 text-center border-e">
        <svg
          onClick={deleteRating}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 mx-auto cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </td>
    </tr>
  );
};

export default ProductReviewTable;
