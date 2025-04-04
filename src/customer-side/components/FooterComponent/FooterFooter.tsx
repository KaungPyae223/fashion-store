import React from "react";
import Container from "../Container";

const FooterFooter = () => {
  return (
    <div className="border">
      <Container>
        <div className="col-span-full py-3 flex justify-center md:justify-between items-center">
          <p className="font-medium text-3xl hidden md:block">Alexa</p>
          <p className="text-gray-500">
            www.alexa.com.mm | All Rights Reserved
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FooterFooter;
