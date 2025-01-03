import React from "react";

const AdminRating = ({
  rating,
  FullStar,
  EmptyStar,
}: {
  rating: number;
  FullStar: any;
  EmptyStar: any;
}) => {
  const generateStars = () => {
    const stars = [];
    for (let index = 1; index <= 5; index++) {
      stars.push(
        index <= Math.ceil(rating) ? <> {FullStar}</> : <> {EmptyStar}</>
      );
    }
    return stars;
  };

  return <div className="flex items-center gap-1">{generateStars()}</div>;
};

export default AdminRating;
