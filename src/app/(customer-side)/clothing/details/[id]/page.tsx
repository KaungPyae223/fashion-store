import React from "react";
import DetailsPage from "@/customer-side/features/product-details/pages/DetailsPage";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <DetailsPage
      PreviousSection={[
        { link: "/", title: "Home" },
        { link: "/clothing", title: "Clothing" },
      ]}
      id={id}
    />
  );
};

export default page;
