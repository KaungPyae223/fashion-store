import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBrandCard = ({ img, title, link }) => {
  return (
    <div className="flex flex-col">
      <Image
        width={800}
        height={800}
        alt={title}
        className=" h-[200px] sm:h-auto sm:flex-1 w-full object-contain "
        src={img}
      />
      <p className="mt-5 text-lg font-medium">{title}</p>
      <Link href={link} className="text-gray-500 mt-1 text-sm">
        Shop Now
      </Link>
    </div>
  );
};

export default HomeBrandCard;
