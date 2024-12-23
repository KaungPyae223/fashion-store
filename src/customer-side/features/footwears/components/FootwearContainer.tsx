import Container from "@/customer-side/components/Container";
import React from "react";
import FootwearFilterSection from "./FootwearFilterSection";
import FootwearDisplaySection from "./FootwearDisplaySection";

const FootwearContainer = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-3">
          <FootwearFilterSection />
        </div>

        <div className="col-span-9">
          <FootwearDisplaySection />
        </div>
      </Container>
    </div>
  );
};

export default FootwearContainer;
