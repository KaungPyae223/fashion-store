import DetailsPage from "@/customer-side/features/product-details/pages/DetailsPage";
import React from "react";

const page = ({ params: { q, id } }) => {
  return (
    <DetailsPage
      PreviousSection={[
        { link: "/", title: "Home" },
        { link: "/search/" + q, title: "Footwear" },
      ]}
      id={id}
    />
  );
};

export default page;
