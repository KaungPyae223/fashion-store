import Heros from "@/customer-side/components/Heros";
import React from "react";
import BrandContainer from "../components/BrandContainer";
import BrandImage from "@/assets/BrandImage.jpg";

const BrandPage = () => {
  

  return (
    <div>
      <Heros image={BrandImage.src} previousSection={[{title:"Home",link:"/"}]} title="Brands" />
      <BrandContainer />
    </div>
  );
};

export default BrandPage;
