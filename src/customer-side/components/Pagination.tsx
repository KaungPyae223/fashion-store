"use client";
import useUpdateParams from "@/hooks/useUpdateParams";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const updateParams = useUpdateParams();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const UpdatePage = (page: number) => {
    updateParams("page", page.toString());
    setCurrentPage(page);
  };

  const PrevNext = (preOrNex: string) => {
    if (preOrNex === "prev" && currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      updateParams("page", newPage.toString());
    } else if (preOrNex === "next" && currentPage < Pages[Pages.length - 1]) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      updateParams("page", newPage.toString());
    }
  };

  useEffect(() => {
    const Page = searchParams.get("page");
    setCurrentPage(Page ? parseInt(Page, 10) : 1);
  }, []);

  const Pages: number[] = [1, 2, 3, 4, 5];

  const Button = ({ pageNo }: { pageNo: number }) => {
    return (
      <button
        type="button"
        onClick={() => UpdatePage(pageNo)}
        className={`${
          pageNo === currentPage
            ? "bg-gray-800 text-white"
            : "text-gray-800 hover:bg-gray-100"
        } min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 py-2 px-3 text-sm focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10`}
      >
        {pageNo}
      </button>
    );
  };

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center -space-x-px" aria-label="Pagination">
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm  border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-label="Previous"
          onClick={() => PrevNext("prev")}
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        {Pages.map((page) => (
          <Button key={page} pageNo={page} />
        ))}
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-label="Next"
          onClick={() => PrevNext("next")}
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
