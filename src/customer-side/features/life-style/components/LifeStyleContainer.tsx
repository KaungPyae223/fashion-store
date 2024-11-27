import Container from "@/customer-side/components/Container";
import React from "react";
import LifeStyleFilter from "./LifeStyleFilter";
import LifeStyleProducts from "./LifeStyleProducts";

const LifeStyleContainer = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-4">
          <LifeStyleFilter />
        </div>

        <div className="col-span-8">
          <LifeStyleProducts />
        </div>
      </Container>
    </div>
  );
};

export default LifeStyleContainer;
