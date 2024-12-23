import Heros from "@/customer-side/components/Heros";
import React from "react";
import { SupportContainer } from "../components/SupportContainer";
import CustomerSupportImage from "@/assets/CustomerSupportImage.jpg"

const SupportPage = () => {
  return (
    <div>
      <Heros
        image={CustomerSupportImage.src}
        title="Customer Supports"
        previousSection={[{ title: "Home", link: "/" }]}
      />
      <SupportContainer/>
    </div>
  );
};

export default SupportPage;
