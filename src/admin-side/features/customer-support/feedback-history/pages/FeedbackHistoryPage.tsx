'use client'
import React from "react";
import FeedbackHistoryContainer from "../components/FeedbackHistoryContainer";
import { useFeedbackData } from "../hooks/useFeedbackData";
import Loading from "@/admin-side/components/Loading";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import NoData from "@/admin-side/components/NoData";

const FeedbackHistoryPage = () => {

  const {
    handleFilter,
    data,
    isLoading,
    filterCustomerName,
    filterAdminName,
    error,
  } = useFeedbackData();

  return (
    <div>
      <div className="flex flex-row justify-end border-b pb-6">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="search">
              Customer Name
            </label>
            <input
              ref={filterCustomerName}
              id="search"
              type="text"
              className="border border-gray-300  px-3 py-2 outline-none h-10 w-[250px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="search">
              Admin Name
            </label>
            <input
              ref={filterAdminName}
              id="search"
              type="text"
              className="border border-gray-300  px-3 py-2 outline-none h-10 w-[250px]"
            />
          </div>
          <div onClick={handleFilter} className="flex flex-row h-10 mt-auto cursor-pointer justify-center items-center gap-2 p-3 text-sm  text-gray-700 border bg-gray-300 hover:border-gray-800 duration-300">
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            Filter
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : data?.data.length > 0 ? (
        <>
          <FeedbackHistoryContainer feedback={data.data} />
          <AdminPagination meta={data?.meta} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default FeedbackHistoryPage;
