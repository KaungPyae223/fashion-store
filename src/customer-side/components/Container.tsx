import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto grid-cols-12 gap-6 grid xl:px-14 px-3">
      {children}
    </div>
  );
};

export default Container;
