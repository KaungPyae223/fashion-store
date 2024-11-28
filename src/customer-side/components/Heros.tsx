import React from "react";
import Container from "./Container";
import BreadCrumb from "./BreadCrumb";

const Heros = ({ title,previousSection }: { title: string,previousSection:{title:string,link:string}[] }) => {
  return (
    <Container>
      <div className="h-[300px] col-span-12 flex flex-col gap-6 items-center justify-center border-b">
        <p className="uppercase text-4xl font-semibold tracking-[0.3rem]">
          {title}
        </p>
        <BreadCrumb previousSection={previousSection} title={title} />
      </div>
    </Container>
  );
};

export default Heros;
