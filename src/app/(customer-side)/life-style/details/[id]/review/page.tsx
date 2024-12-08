import React from "react";
import "../../../../../../styles/globals.css";
import ReviewPage from "@/customer-side/features/product-details/pages/ReviewPage";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <ReviewPage
    id={id}
    />
  );
};

export default page;
