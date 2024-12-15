import PageTitle from "@/admin-side/components/PageTitle";
import PaymentPage from "@/admin-side/features/payment/page/PaymentPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Payments" />
      <PaymentPage />
    </div>
  );
};

export default page;
