import React from "react";

const DoNotMention = ({ mention }: { mention: string }) => {
  return (
    <div className="flex items-center gap-1.5 mb-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>

      {mention}
    </div>
  );
};

export default DoNotMention;
