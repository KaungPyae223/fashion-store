import React from "react";
import Rating from "./Rating";
import ReviewCard from "./ReviewCard";

const RatingContainer = () => {

  
  return (
    <div className="mt-20 mb-10">
      <div className="flex gap-8 items-center">
        <p className="text-2xl font-medium">Rating</p>
        <div className="flex items-center">
          <Rating rating={4.9} />
          <span className="ms-3 me-2 tracking-wide font-medium">(4.9/5)</span>
          <span className="text-sm">12 reviewers</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mt-10">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="flex items-center">
        <div className="border mt-12 border-gray-500 mx-auto px-16 py-3 cursor-pointer">
          Write Review
        </div>
      </div>
    </div>
  );
};

export default RatingContainer;
