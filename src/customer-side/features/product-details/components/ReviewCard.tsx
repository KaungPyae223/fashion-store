import React from "react";
import Rating from "./Rating";

const ReviewCard = () => {
  return (
    <div className="p-5 bg-slate-100">
      <div className="pb-3 border-b flex items-center justify-between border-b-gray-300">
        <p className="font-medium">Kaung Pyae Aung</p>
        <Rating rating={5} />
      </div>
      <p className="my-9 text-sm text-justify text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quae est
        tempore voluptas repudiandae libero nobis inventore expedita ipsam
        facilis! Ad atque facere saepe quae soluta dolorem delectus accusamus
        reiciendis, nulla id rerum placeat iusto consectetur tenetur harum fugit
        voluptatum, sunt praesentium! Nam, doloremque molestias officiis nobis
        autem saepe quam.
      </p>
      <p className="pt-3 border-t border-t-gray-300 text-sm text-center">
        23 June 2024
      </p>
    </div>
  );
};

export default ReviewCard;
