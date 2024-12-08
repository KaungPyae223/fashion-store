import React from "react";
import "../../../../../styles/globals.css";
import DetailsPage from "@/customer-side/features/product-details/pages/DetailsPage";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <DetailsPage
      PreviousSection={[
        { link: "/", title: "Home" },
        { link: "/footwears", title: "Footwear" },
      ]}
      id={id}
    />
  );
};

export default page;
