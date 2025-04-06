import Container from "@/customer-side/components/Container";
import React from "react";
import FilterSection from "./FilterSection";
import ClothesDisplaySection from "./ClothesDisplaySection";

const ClothesContainer = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-full lg:col-span-3">
          <FilterSection />
        </div>
        
        <div className="col-span-full lg:col-span-9">
          <ClothesDisplaySection />
        </div>
      </Container>
    </div>
  );
};

export default ClothesContainer;
