import Heros from "@/customer-side/components/Heros";
import React from "react";
import FootwearContainer from "../components/FootwearContainer";

const FootwearPage = () => {
  return (
    <div>
      <Heros previousSection={[{title:"Home",link:"/"}]} title="footwears" />
      <FootwearContainer />
    </div>
  );
};

export default FootwearPage;
