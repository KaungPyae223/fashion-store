import BrandDetailsPage from "@/customer-side/features/brands/pages/BrandDetailsPage";
import React from "react";
import "../../../../styles/globals.css";

const page = ({ params: { name } }: { params: { name: string } }) => {
  return <BrandDetailsPage name={name}/>;
};

export default page;
