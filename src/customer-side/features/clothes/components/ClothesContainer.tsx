import Container from "@/customer-side/components/Container";
import React from "react";
import FilterSection from "./FilterSection";
import ClothesDisplaySection from "./ClothesDisplaySection";

const ClothesContainer = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-4">
          <FilterSection />
        </div>
        
        <div className="col-span-8">
          <ClothesDisplaySection />
        </div>
      </Container>
    </div>
  );
};

export default ClothesContainer;