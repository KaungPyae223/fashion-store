import React from "react";
import Container from "../Container";
import FooterSignUp from "./FooterSignUp";

const FooterHead = () => {
  return (
    <div className="border">
      <Container>
        <div className=" col-span-6 py-12">
          <p className="uppercase text-2xl font-semibold tracking-widest mb-5">
            Sign Up to Alexa. Stay connect with us.
          </p>
          <p className="text-gray-600">
            Sign up for exclusive early sale access and{" "}
            <span className="block"></span> tailored new arrivals
          </p>
        </div>
        <FooterSignUp />
      </Container>
    </div>
  );
};

export default FooterHead;
