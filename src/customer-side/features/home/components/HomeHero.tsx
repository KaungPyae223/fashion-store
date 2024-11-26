import React from "react";
import Container from "../../../components/Container";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="py-6 mb-6">
      <Container>
        <div className="col-span-6 flex flex-col items-start justify-center gap-5">
          <p className="text-4xl tracking-wide font-bold ">
            New Nike Air Max is Available Now
          </p>
          <p className="text-sm cursor-pointer py-1 px-3 border border-blue-800 text-blue-800">
            View Details
          </p>
        </div>
        <div className="col-span-6">
          <img
            layout="intrinsic"
            className="shadow-lg mx-auto object-cover object-center rounded-lg"
            alt="Nike Air Max"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62ac892a-1628-4b60-b2ef-acfadc0d0754/AIR+MAX+DN.png"
          />
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
