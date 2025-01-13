import PageTitle from "@/admin-side/components/PageTitle";
import DeliveryManagementPage from "@/admin-side/features/super-admin/delivery-management/page/DeliveryManagementPage";
import React from "react";
import Delivery from "@/assets/Delivery.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Delivery Management"
        subTitle="Manage the delivery information"
        animate={Delivery}
      />
      <AdminCheck allow={"Super Admin"}>
        <DeliveryManagementPage />
      </AdminCheck>
    </div>
  );
};

export default page;
