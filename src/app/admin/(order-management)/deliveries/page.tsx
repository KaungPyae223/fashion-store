import PageTitle from "@/admin-side/components/PageTitle";
import React from "react";
import Delivery from "@/assets/Delivery.json";
import DeliveryPage from "@/admin-side/features/order-managements/delivery-information.tsx/pages/DeliveryPage";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Delivery"
        subTitle="Deliveries information"
        animate={Delivery}
      />
      <AdminCheck allow={"Order Management"}>
        <DeliveryPage />
      </AdminCheck>
    </div>
  );
};

export default page;
