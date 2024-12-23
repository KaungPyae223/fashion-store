import Heros from "@/customer-side/components/Heros";
import React from "react";
import BrandClothesContainer from "../components/BrandClothesContainer";

const BrandDetailsPage = ({ name }: { name: string }) => {
  return (
    <div>
      <Heros image="https://miro.medium.com/v2/resize:fit:828/format:webp/1*7MJoxgoEQBW-IMEMklTdVg.jpeg" previousSection={[{title:"Home",link:"/"},{title:"Brands",link:"/brands"}]} title={name} />
      <BrandClothesContainer />
    </div>
  );
};

export default BrandDetailsPage;
