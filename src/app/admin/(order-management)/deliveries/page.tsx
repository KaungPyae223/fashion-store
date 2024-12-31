import PageTitle from "@/admin-side/components/PageTitle";
import React from "react";
import Delivery from "@/assets/Delivery.json";
import DeliveryPage from "@/admin-side/features/order-managements/delivery-information.tsx/pages/DeliveryPage";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Delivery"
        subTitle="Deliveries information"
        animate={Delivery}
      />
      <DeliveryPage />
    </div>
  );
};

export default page;
