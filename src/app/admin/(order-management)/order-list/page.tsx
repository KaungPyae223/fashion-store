import PageTitle from "@/admin-side/components/PageTitle";
import OrderListPage from "@/admin-side/features/order-managements/order-list/page/OrderListPage";
import React from "react";
import OrderAnimate from "@/assets/OrderListAnimation.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Order List"
        subTitle="Customers orders to deliver"
        animate={OrderAnimate}
      />
      <AdminCheck allow={"Order Management"}>
        <OrderListPage />
      </AdminCheck>
    </div>
  );
};

export default page;
