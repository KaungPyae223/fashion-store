import React from "react";

const FAQ = ({question,answer}:{question:string,answer:string}) => {
  return (
    <div>
      <details className="py-4 group border-b select-none">
        <summary className="[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900 ">
          {question}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-labelledby="title-ac15 desc-ac15"
          >
            <title id="title-ac15">Open icon</title>
            <desc id="desc-ac15">
              icon that represents the state of the summary
            </desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </summary>
        <div className="mt-6 mb-3 select-none text-gray-500">
          {answer}
        </div>
      </details>
    </div>
  );
};

export default FAQ;
