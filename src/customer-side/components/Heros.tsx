'use client'
import React from "react";
import Container from "./Container";
import BreadCrumb from "./BreadCrumb";

const Heros = ({
  title,
  previousSection,
  image
}: {
  title: string;
  previousSection: { title: string; link: string }[];
  image: string;
}) => {



  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-30">
        <Container>
          <div className="h-[350px]  col-span-full flex flex-col gap-6 items-center justify-center border-b">
            <div className="flex flex-col gap-4 items-center justify-center bg-white p-10 px-24">
              <p className="uppercase text-4xl font-semibold tracking-[0.3rem]">
                {title}
              </p>
              <BreadCrumb previousSection={previousSection} title={title} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Heros;
