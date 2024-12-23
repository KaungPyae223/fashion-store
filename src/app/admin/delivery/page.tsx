import PageTitle from "@/admin-side/components/PageTitle";
import DeliveryPage from "@/admin-side/features/Delivery/page/DeliveryPage";
import React from "react";
import Delivery from "@/assets/Delivery.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Delivery" subTitle="Deliveries information" animate={Delivery} />
      <DeliveryPage />
    </div>
  );
};

export default page;
