"use client";
import React from "react";

const Container = ({ children,className }) => {
  return (
    <div className={`mx-auto grid-cols-12 gap-6 grid max-w-[1400px] ${className} px-3 w-full`}>
      {children}
    </div>
  );
};

export default Container;
