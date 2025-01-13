import PageTitle from "@/admin-side/components/PageTitle";
import FeedbackHistoryPage from "@/admin-side/features/customer-support/feedback-history/pages/FeedbackHistoryPage";
import React from "react";
import FeedbackHistoryAnimation from "@/assets/FeedbackHistoryAnimation.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Feedbacks History"
        subTitle="Feedbacks give to the customers questions"
        animate={FeedbackHistoryAnimation}
      />
      <AdminCheck allow={"Customer Support"}>
        <FeedbackHistoryPage />
      </AdminCheck>
    </div>
  );
};

export default page;
