import Heros from "@/customer-side/components/Heros";
import React from "react";
import BrandClothesContainer from "../components/BrandClothesContainer";

const BrandDetailsPage = ({ name }: { name: string }) => {
  return (
    <div>
      <Heros title={name} />
      <BrandClothesContainer />
    </div>
  );
};

export default BrandDetailsPage;
