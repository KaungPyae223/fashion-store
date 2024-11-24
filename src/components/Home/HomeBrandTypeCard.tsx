import Link from "next/link";
import React from "react";

interface HomeBrandTypeCardInterface {
  img:string,
  title:string,
  link:string
}

const HomeBrandTypeCard = ({img,title,link}:HomeBrandTypeCardInterface) => {
  return (
    <div>
      <img
        className="h-[350px] w-full object-cover"
        src={img}
      />
      <p className="mt-5 text-lg font-medium">{title}</p>
      <Link href={link} className="text-gray-500 mt-1 text-sm">
        Shop Now
      </Link>
    </div>
  );
};

export default HomeBrandTypeCard;
