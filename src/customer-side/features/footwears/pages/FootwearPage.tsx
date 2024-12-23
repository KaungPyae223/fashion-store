import Heros from "@/customer-side/components/Heros";
import React from "react";
import FootwearContainer from "../components/FootwearContainer";
import FootwearImage from "@/assets/FootWear.jpg";

const FootwearPage = () => {
  return (
    <div>
      <Heros image={FootwearImage.src}  previousSection={[{title:"Home",link:"/"}]} title="footwears" />
      <FootwearContainer />
    </div>
  );
};

export default FootwearPage;
