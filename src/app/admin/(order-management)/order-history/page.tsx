import AdminCheck from "@/admin-side/components/AdminCheck";
import PageTitle from "@/admin-side/components/PageTitle";
import OrderHistoryPage from "@/admin-side/features/order-managements/order-history/page/OrderHistoryPage";
import OrderHistoryAnimation from "@/assets/OrderHistoryAnimation.json";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Order History"
        subTitle="The Orders that are already delivered"
        animate={OrderHistoryAnimation}
      />
      <AdminCheck allow={"Order Management"}>
        <OrderHistoryPage />
      </AdminCheck>
    </div>
  );
};

export default page;
