import PageTitle from "@/admin-side/components/PageTitle";
import DeliveryPage from "@/admin-side/features/Delivery/page/DeliveryPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Delivery" />
      <DeliveryPage />
    </div>
  );
};

export default page;
