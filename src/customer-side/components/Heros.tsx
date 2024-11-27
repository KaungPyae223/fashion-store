import React from "react";
import Container from "./Container";

const Heros = ({title}:{title:string}) => {
  return (
    <Container>
      <div className="h-[300px] col-span-12 flex items-center justify-center border-b">
        <p className="uppercase text-3xl font-semibold tracking-[0.3rem]">
          {title}
        </p>
      </div>
    </Container>
  );
};

export default Heros;
