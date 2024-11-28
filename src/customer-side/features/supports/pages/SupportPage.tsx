import Heros from "@/customer-side/components/Heros";
import React from "react";
import { SupportContainer } from "../components/SupportContainer";

const SupportPage = () => {
  return (
    <div>
      <Heros
        title="Customer Supports"
        previousSection={[{ title: "Home", link: "/" }]}
      />
      <SupportContainer/>
    </div>
  );
};

export default SupportPage;
