import PageTitle from "@/admin-side/components/PageTitle";
import FeedbackHistoryPage from "@/admin-side/features/feedback-history/pages/FeedbackHistoryPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Feedbacks History" />
      <FeedbackHistoryPage/>
    </div>
  );
};

export default page;
