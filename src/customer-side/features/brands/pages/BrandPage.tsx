import Heros from "@/customer-side/components/Heros";
import React from "react";
import BrandContainer from "../components/BrandContainer";

const BrandPage = () => {
  

  return (
    <div>
      <Heros previousSection={[{title:"Home",link:"/"}]} title="Brands" />
      <BrandContainer />
    </div>
  );
};

export default BrandPage;
