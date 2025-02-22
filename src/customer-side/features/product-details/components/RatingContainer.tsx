import React, { useState } from "react";
import Rating from "./Rating";
import ReviewCard from "./ReviewCard";
import ReviewRoute from "./ReviewRoute";
import useSWR from "swr";
import { fetchHome } from "@/customer-side/services/HomePage";
import DetailsPagination from "@/admin-side/components/DetailsPagination";

const RatingContainer = ({
  id,
  ratingData,
}: {
  id: string;
  ratingData: any;
}) => {
  const rating = ratingData.average?.toFixed(1) || "0";

  const [page, setPage] = useState(`1`);

  const { isLoading, data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product-rating/${id}?page=${page}`,
    fetchHome
  );


  return (
    <div className="mt-20 mb-10">
      <div className="flex gap-8 items-center">
        <p className="text-2xl font-medium">Rating</p>
        <div className="flex items-center">
          <Rating rating={rating} />
          <span className="ms-3 me-2 tracking-wide font-medium">
            ({rating}/5)
          </span>
          <span className="text-sm">{ratingData.totalReviews} reviewers</span>
        </div>
        <ReviewRoute />
      </div>

      {!isLoading && (
        <>
          <div className="grid grid-cols-2 gap-2 mt-10">
            {data.data.map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </div>
          <DetailsPagination meta={data.meta} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default RatingContainer;
