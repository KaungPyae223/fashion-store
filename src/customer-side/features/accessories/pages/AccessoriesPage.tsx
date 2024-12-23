import Heros from "@/customer-side/components/Heros";
import React from "react";
import AccessoriesContainer from "../components/AccessoriesContainer";
import AccessoriesImage from "@/assets/AccessoriesImage.jpg";

const AccessoriesPage = () => {
  return (
    <div>
      <Heros image={AccessoriesImage.src} previousSection={[{title:"Home",link:"/"}]} title="Accessories" />
      <AccessoriesContainer />
    </div>
  );
};

export default AccessoriesPage;
