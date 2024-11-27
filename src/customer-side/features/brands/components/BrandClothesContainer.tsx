import Container from "@/customer-side/components/Container";
import React from "react";
import BrandProductFilterSection from "./BrandProductsFilterSection";
import BrandProductsDisplaySection from "./BrandProductsDisplaySection";

const BrandClothesContainer = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-4">
          <BrandProductFilterSection />
        </div>

        <div className="col-span-8">
          <BrandProductsDisplaySection />
        </div>
      </Container>
    </div>
  );
};

export default BrandClothesContainer;
