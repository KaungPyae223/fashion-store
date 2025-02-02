"use client";
import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto grid-cols-12 gap-6 grid max-w-[1400px] px-3 w-full">
      {children}
    </div>
  );
};

export default Container;
