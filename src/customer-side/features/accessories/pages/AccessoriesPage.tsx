import Heros from "@/customer-side/components/Heros";
import React from "react";
import AccessoriesContainer from "../components/AccessoriesContainer";

const AccessoriesPage = () => {
  return (
    <div>
      <Heros previousSection={[{title:"Home",link:"/"}]} title="Accessories" />
      <AccessoriesContainer />
    </div>
  );
};

export default AccessoriesPage;
