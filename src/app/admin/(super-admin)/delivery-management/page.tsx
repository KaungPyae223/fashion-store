import PageTitle from "@/admin-side/components/PageTitle";
import DeliveryManagementPage from "@/admin-side/features/super-admin/delivery-management/page/DeliveryManagementPage";
import React from "react";
import Delivery from "@/assets/Delivery.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Delivery Management" subTitle="Manage the delivery information" animate={Delivery} />
      <DeliveryManagementPage />
    </div>
  );
};

export default page;
