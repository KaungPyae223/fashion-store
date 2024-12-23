import PageTitle from "@/admin-side/components/PageTitle";
import FeedbackHistoryPage from "@/admin-side/features/feedback-history/pages/FeedbackHistoryPage";
import React from "react";
import FeedbackHistoryAnimation from "@/assets/FeedbackHistoryAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Feedbacks History" subTitle="Feedbacks give to the customers questions" animate={FeedbackHistoryAnimation} />
      <FeedbackHistoryPage/>
    </div>
  );
};

export default page;
