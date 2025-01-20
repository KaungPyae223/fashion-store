import React from "react";
import Rating from "./Rating";
import { useFormatDate } from "@/hooks/useFormatDate";

const ReviewCard = ({review}) => {

  const {formatDate} = useFormatDate();

  return (
    <div className="p-5 bg-slate-100">
      <div className="pb-3 border-b flex items-center justify-between border-b-gray-300">
        <p className="font-medium">{review.name}</p>
        <Rating rating={review.rating} />
      </div>
      <p className="my-9 text-sm text-justify text-gray-600">
        {review.comment}
      </p>
      <p className="pt-3 border-t border-t-gray-300 text-sm text-center">
        {formatDate(review.date)}
      </p>
    </div>
  );
};

export default ReviewCard;
