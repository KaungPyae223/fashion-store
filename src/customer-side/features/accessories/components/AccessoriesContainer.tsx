import Container from "@/customer-side/components/Container";
import React from "react";
import AccessoriesFilterSection from "./AccessoriesFilterSection";
import AccessoriesDisplaySection from "./AccessoriesDisplaySection";

const AccessoriesContainer = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-4">
          <AccessoriesFilterSection />
        </div>

        <div className="col-span-8">
          <AccessoriesDisplaySection />
        </div>
      </Container>
    </div>
  );
};

export default AccessoriesContainer;
