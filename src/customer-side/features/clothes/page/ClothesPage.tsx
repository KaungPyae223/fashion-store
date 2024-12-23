import Heros from "@/customer-side/components/Heros";
import React from "react";
import ClothesContainer from "../components/ClothesContainer";
import ClotheImage from "@/assets/ClothingImage.jpg";

const ClothesPage = () => {
  return (
    <div>
      <Heros
        image={ClotheImage.src}
        previousSection={[{ title: "Home", link: "/" }]}
        title="clothing"
      />
      <ClothesContainer />
    </div>
  );
};

export default ClothesPage;
