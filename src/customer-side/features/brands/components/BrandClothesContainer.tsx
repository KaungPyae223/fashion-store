import Container from "@/customer-side/components/Container";
import React from "react";
import BrandProductFilterSection from "./BrandProductsFilterSection";
import BrandProductsDisplaySection from "./BrandProductsDisplaySection";

const BrandClothesContainer = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-3">
          <BrandProductFilterSection />
        </div>

        <div className="col-span-9">
          <BrandProductsDisplaySection />
        </div>
      </Container>
    </div>
  );
};

export default BrandClothesContainer;
