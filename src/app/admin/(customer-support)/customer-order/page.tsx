import PageTitle from "@/admin-side/components/PageTitle";
import React from "react";
import PaymentHistoryAnimation from "@/assets/PaymentHistoryAnimation.json";
import CustomerOrderPage from "@/admin-side/features/customer-support/customer-order/page/CustomerOrderPage";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Customer Orders"
        subTitle="The data of customers orders"
        animate={PaymentHistoryAnimation}
      />
      <CustomerOrderPage />
    </div>
  );
};

export default page;
