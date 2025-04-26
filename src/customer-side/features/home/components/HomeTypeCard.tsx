import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeTypeCard = ({ img, title, link,gender }) => {
  return (
    <div>
      <Image
        width={800}
        height={800}
        alt={title}
        className=" h-[400px] w-full object-cover "
        src={img}
      />
      <p className="mt-5 text-lg font-medium">{title}</p>
      <Link href={link+(gender ? "?gender=" + gender : "")} className="text-gray-500 mt-1 text-sm">
        Shop Now
      </Link>
    </div>
  );
};

export default HomeTypeCard;
