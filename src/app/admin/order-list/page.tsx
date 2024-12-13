import PageTitle from "@/admin-side/components/PageTitle";
import OrderListPage from "@/admin-side/features/order-list/page/OrderListPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Order List" />
      <OrderListPage />
    </div>
  );
};

export default page;
