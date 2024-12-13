import PageTitle from "@/admin-side/components/PageTitle";
import OrderHistoryPage from "@/admin-side/features/order-history/page/OrderHistoryPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Order History" />
      <OrderHistoryPage />
    </div>
  );
};

export default page;
