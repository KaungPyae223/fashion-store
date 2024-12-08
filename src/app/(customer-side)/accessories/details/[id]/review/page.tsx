import React from "react";
import ReviewPage from "@/customer-side/features/product-details/pages/ReviewPage";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return <ReviewPage id={id} />;
};

export default page;
