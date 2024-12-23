import PageTitle from "@/admin-side/components/PageTitle";
import OrderListPage from "@/admin-side/features/order-list/page/OrderListPage";
import React from "react";
import OrderAnimate from "@/assets/OrderListAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Order List" subTitle="Customers orders to deliver" animate={OrderAnimate} />
      <OrderListPage />
    </div>
  );
};

export default page;
