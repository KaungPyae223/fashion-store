import React from "react";
import DetailsPage from "@/customer-side/features/product-details/pages/DetailsPage";

const page = ({ params: { id,name } }: { params: { id: string , name:string } }) => {
  return (
    <DetailsPage
      PreviousSection={[
        { link: "/", title: "Home" },
        { link: "/brands", title: "Brands" },
        { link: `/brands/${name}`, title: name },
      ]}
      id={id}
    />
  );
};

export default page;
