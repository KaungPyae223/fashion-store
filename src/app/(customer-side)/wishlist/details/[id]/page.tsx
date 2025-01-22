import DetailsPage from "@/customer-side/features/product-details/pages/DetailsPage";
import React from "react";

const page = ({ params: { id } }) => {
  return (
    <DetailsPage
      PreviousSection={[
        { link: "/", title: "Home" },
        { link: "/wishlist" , title: "Wish List" },
      ]}
      id={id}
    />
  );
};

export default page;
