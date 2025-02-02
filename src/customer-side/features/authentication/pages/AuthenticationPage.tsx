"use client";
import React from "react";
import Container from "@/customer-side/components/Container";
import Image from "next/image";
import AuthImage from "@/assets/AuthenticationUiImage.jpg";
import AuthenticationContainer from "@/customer-side/features/authentication/components/AuthenticationContainer";

const AuthenticationPage = () => {
  return (
    <div>
      <div className="py-16">
        <Container>
          <div className="col-span-6 flex flex-col">
            <p className="text-xl font-medium">Authentication</p>
            <AuthenticationContainer />
          </div>
          <div className="col-span-6">
            <Image
              width={600}
              height={600}
              src={AuthImage}
              alt="Authentication UI"
              className="w-2/3 max-h-[450px] mx-auto object-cover"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AuthenticationPage;
