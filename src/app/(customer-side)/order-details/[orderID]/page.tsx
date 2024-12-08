import React from "react";
import OrderDetailsPage from "@/customer-side/features/order-details/pages/OrderDetailsPage";

const page = ({ params: { orderID } }: { params: { orderID: string } }) => {
  return <OrderDetailsPage orderID={orderID} />;
};

export default page;
