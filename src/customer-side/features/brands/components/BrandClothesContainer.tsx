import Container from "@/customer-side/components/Container";
import React from "react";
import BrandProductFilterSection from "./BrandProductsFilterSection";
import BrandProductsDisplaySection from "./BrandProductsDisplaySection";

const BrandClothesContainer = ({filterData,name}) => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-3">
          <BrandProductFilterSection filterData={filterData} />
        </div>

        <div className="col-span-9">
          <BrandProductsDisplaySection name={name} />
        </div>
      </Container>
    </div>
  );
};

export default BrandClothesContainer;
