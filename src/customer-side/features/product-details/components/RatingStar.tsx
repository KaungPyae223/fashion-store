import React, { SetStateAction } from "react";

interface RatingStarInterface {
  title: string;
  rating: number;
  setRating: React.Dispatch<SetStateAction<number>>;
  selfRating: number;
}

export const RatingStar = ({
  title,
  rating,
  setRating,
  selfRating,
}: RatingStarInterface) => {
  return (
    <div
      onClick={() => setRating(selfRating)}
      className={`${
        selfRating <= rating && "bg-slate-300"
      } p-5 duration-300 flex-1 flex flex-col cursor-pointer items-center border gap-3`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
      <p className="text-xs">{title}</p>
    </div>
  );
};
