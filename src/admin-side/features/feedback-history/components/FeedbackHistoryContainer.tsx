import React from "react";
import FeedbackHistoryData from "./FeedbackHistoryData";
import AdminPagination from "@/admin-side/components/AdminPagimation";

const FeedbackHistoryContainer = () => {
  return (
    <div>
      <div className="mt-6 grid grid-cols-2 border border-gray-300">
        <FeedbackHistoryData />
        <FeedbackHistoryData />
        <FeedbackHistoryData />
        <FeedbackHistoryData />
        <FeedbackHistoryData />
        <FeedbackHistoryData />
        <FeedbackHistoryData />
        <FeedbackHistoryData />
      </div>
      <AdminPagination />
    </div>
  );
};

export default FeedbackHistoryContainer;
