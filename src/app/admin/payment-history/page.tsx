import PageTitle from "@/admin-side/components/PageTitle";
import PaymentPage from "@/admin-side/features/customer-support/payment/page/PaymentPage";
import React from "react";
import PaymentHistoryAnimation from "@/assets/PaymentHistoryAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Payments History" subTitle="The payment history of the orders" animate={PaymentHistoryAnimation} />
      <PaymentPage />
    </div>
  );
};

export default page;
