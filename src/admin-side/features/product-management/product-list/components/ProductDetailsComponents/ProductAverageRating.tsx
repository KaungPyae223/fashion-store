"use client";
import AdminRating from "@/admin-side/components/AdminRating";
import { fetchProduct } from "@/admin-side/services/product";
import React from "react";
import useSWR from "swr";

const ProductAverageReview = ({ id }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseUrl}/average-rating/${id}`;

  const { data, isLoading } = useSWR(url, fetchProduct);

  return (
    !isLoading && (
      <div className="p-5 bg-white col-span-2">
        <p className="text-xl tracking-wider font-medium">Average Rating</p>

        <div className="my-5 flex flex-row justify-start items-center gap-3">
          <AdminRating
            rating={data.average_rating}
            FullStar={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            EmptyStar={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            }
          />

          <p className="text-3xl font-bold ms-2">{data.average_rating} / 5</p>
          <p className="text text-gray-400">
            ( Based on {data.total_review} reviews )
          </p>
        </div>
        <div className="my-3 mt-12 flex flex-col gap-3.5">
          <Rating
            stars={5}
            totalRaters={data.percentage.star5.total}
            percent={data.percentage.star5.percentage}
          />
          <Rating
            stars={4}
            totalRaters={data.percentage.star4.total}
            percent={data.percentage.star4.percentage}
          />
          <Rating
            stars={3}
            totalRaters={data.percentage.star3.total}
            percent={data.percentage.star3.percentage}
          />
          <Rating
            stars={2}
            totalRaters={data.percentage.star2.total}
            percent={data.percentage.star2.percentage}
          />
          <Rating
            stars={1}
            totalRaters={data.percentage.star1.total}
            percent={data.percentage.star1.percentage}
          />
        </div>
        <p className="my-8">
          Condition:{" "}
          {data.average_rating > 4 ? (
            <span className="font-medium">Very good 💗</span>
          ) : data.average_rating > 3 ? (
            <span className="font-medium">Good 😊</span>
          ) : data.average_rating > 2 ? (
            <span className="font-medium">Normal 👍🏼</span>
          ) : (
            <span className="font-medium">Bad 😔</span>
          )}
        </p>
        <p className="text-red-700 text-sm ">
          <span className="font-semibold pe-2">Note:</span> These ratings are
          based on the customers reviews
        </p>
      </div>
    )
  );
};

const Rating = ({
  stars,
  totalRaters,
  percent,
}: {
  stars: number;
  totalRaters: number;
  percent: number;
}) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <p className="font-medium">{stars} stars</p>
      <div className="w-full bg-gray-200 max-w-[450px] rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 max-w-[450px] rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className=" text-sm flex flex-row items-center justify-start">
        <div className=" flex w-9 flex-row text-gray-700 font-medium items-center justify-start">
          {percent} %
        </div>
        <div className="ms-3 text-gray-500">( {totalRaters} reviews )</div>
      </div>
    </div>
  );
};

export default ProductAverageReview;
